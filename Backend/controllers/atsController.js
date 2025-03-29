import fs from "fs";
import path from "path";
import axios from "axios";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import Candidate from "../models/CandidateShema.js"
import Job from "../models/JobSchema.js"
import {extractTextFromPDF} from "../Utils/extractResume.js";
import {calculateAtsScore} from "../Utils/calculateAts.js";

dotenv.config();
const GOOGLE_DRIVE_API_KEY = process.env.GOOGLE_DRIVE_API_KEY;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const convertGoogleDriveLink = (resumeUrl) => {
  try {
    // Extract file ID from various Google Drive URL formats
    const fileId = resumeUrl.match(/\/file\/d\/([^\/]+)/)?.[1] || 
                  resumeUrl.match(/id=([^&]+)/)?.[1] ||
                  resumeUrl.match(/\/open\?id=([^&]+)/)?.[1] ||
                  resumeUrl.match(/[-\w]{25,}/)?.[0];

    if (!fileId) {
      console.error("❌ Invalid Google Drive URL format:", resumeUrl);
      return null;
    }

    // Return the public download URL
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  } catch (error) {
    console.error("❌ Error converting Google Drive link:", error);
    return null;
  }
};

// Enhanced resume downloader
export const downloadResume = async (resumeUrl, candidateId) => {
  let filePath = null;
  try {
    console.log("Original resume URL:", resumeUrl);

    // Convert Google Drive link if needed
    if (resumeUrl.includes("drive.google.com")) {
      resumeUrl = convertGoogleDriveLink(resumeUrl);
      if (!resumeUrl) return null;
    }

    console.log("📥 Downloading resume from:", resumeUrl);
    
    const response = await axios.get(resumeUrl, {
      responseType: "arraybuffer",
      maxRedirects: 5,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    filePath = await saveResumeFile(response, candidateId);
    return filePath;
  } catch (error) {
    console.error("❌ Error downloading resume:", error.message);
    if (error.response) {
      console.error("Response status:", error.response.status);
      if (error.response.data) {
        console.error("Response data:", error.response.data.toString().substring(0, 200));
      }
    }
    if (filePath && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    return null;
  }
};

// Helper function to save resume file
const saveResumeFile = async (response, candidateId) => {
  const contentType = response.headers["content-type"] || "";
  let fileExtension = "pdf"; // default
  
  if (contentType.includes("vnd.openxmlformats-officedocument.wordprocessingml.document")) {
    fileExtension = "docx";
  } else if (contentType.includes("msword")) {
    fileExtension = "doc";
  }

  const resumeDir = path.join(__dirname, "..", "temp_resumes");
  if (!fs.existsSync(resumeDir)) {
    fs.mkdirSync(resumeDir, { recursive: true });
  }

  const filePath = path.join(resumeDir, `${candidateId}.${fileExtension}`);
  fs.writeFileSync(filePath, response.data);
  console.log(`✅ Resume saved at: ${filePath}`);
  return filePath;
};

// Main ATS scoring function with proper error handling
export const calculateAtsScoreForCandidates = async (req, res) => {
  let processedCount = 0;
  let skippedCount = 0;

  try {
    const candidates = await Candidate.find();
    console.log(`Found ${candidates.length} candidates to process`);

    for (const candidate of candidates) {
      let filePath = null;
      try {
        console.log(`\nProcessing candidate ${candidate._id}: ${candidate.name}`);
        
        // 1. Resume Link Check
        if (!candidate.resumeLink) {
          console.warn(`⚠️ Skipping: No resume link`);
          skippedCount++;
          continue;
        }

        // 2. Job Validation
        const job = await Job.findById(candidate.jobId);
        if (!job?.title) {
          console.warn(`⚠️ Skipping: Invalid job (ID: ${candidate.jobId})`);
          skippedCount++;
          continue;
        }
        const jobTitle = job.title.trim();
        console.log(`Job Title: "${jobTitle}"`);

        // 3. Resume Download
        filePath = await downloadResume(candidate.resumeLink, candidate._id);
        if (!filePath) {
          console.warn(`⚠️ Skipping: Resume download failed`);
          skippedCount++;
          continue;
        }

        // 4. File Existence Check
        if (!fs.existsSync(filePath)) {
          console.warn(`⚠️ Skipping: File not found at ${filePath}`);
          skippedCount++;
          continue;
        }

        // 5. Text Extraction
        let resumeText;
        try {
          if (filePath.endsWith(".pdf")) {
            resumeText = await extractTextFromPDF(filePath);
          // } else if (filePath.endsWith(".docx")) {
          //   resumeText = await extractTextFromDOCX(filePath);
          } else {
            throw new Error("Unsupported file format");
          }
          
          if (!resumeText?.trim()) {
            throw new Error("Empty text extracted");
          }
          console.log(`Resume text length: ${resumeText.length} chars`);
        } catch (extractError) {
          console.warn(`⚠️ Skipping: Text extraction failed - ${extractError.message}`);
          skippedCount++;
          continue;
        }

        // 6. Score Calculation
        const atsScore = calculateAtsScore(resumeText, jobTitle);
        console.log(`Calculated ATS Score: ${atsScore}`);
        
        if (typeof atsScore !== 'number' || isNaN(atsScore)) {
          throw new Error(`Invalid score: ${atsScore}`);
        }

        // 7. Database Update
        await Candidate.updateOne(
          { _id: candidate._id },
          { $set: { atsScore: Math.round(atsScore) } }
        );

        processedCount++;

      } catch (candidateError) {
        console.error(`❌ Error processing candidate ${candidate._id}:`, candidateError.message);
        skippedCount++;
      } finally {
        // 8. Cleanup - runs whether successful or not
        if (filePath && fs.existsSync(filePath)) {
          try {
            fs.unlinkSync(filePath);
            console.log(`🗑️ Deleted temporary file`);
          } catch (unlinkError) {
            console.error(`File deletion error: ${unlinkError.message}`);
          }
        }
      }
    }

    console.log(`\nProcessed ${processedCount} candidates, skipped ${skippedCount}`);
    res.json({ 
      success: true,
      processed: processedCount,
      skipped: skippedCount,
      message: "ATS scores calculation completed"
    });

  } catch (error) {
    console.error("❌ Critical error in controller:", error);
    res.status(500).json({ 
      success: false,
      error: error.message,
      message: "ATS calculation failed"
    });
  }
};