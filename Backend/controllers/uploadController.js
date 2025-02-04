import cloudinary from '../config/cloudinaryConfig.js';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

// Configure Multer to store files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Middleware to handle single file upload
export const uploadMiddleware = upload.single('file');

// Controller for handling image upload
// export const uploadProfilePicture = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: 'No file uploaded' });
//     }

//     // Upload file buffer to Cloudinary
//     const result = await new Promise((resolve, reject) => {
//       const uploadStream = cloudinary.uploader.upload_stream(
//         { resource_type: 'auto', public_id: uuidv4() },
//         (error, result) => (error ? reject(error) : resolve(result))
//       );
//       uploadStream.end(req.file.buffer);
//     });

//     // Send response with uploaded image URL
//     res.status(200).json({ message: 'Profile picture uploaded successfully', imageUrl: result.secure_url });
//   } catch (error) {
//     console.error('Cloudinary upload error:', error);
//     res.status(500).json({ message: 'Error uploading to Cloudinary', error: error.message });
//   }
// };


// export const uploadProfilePicture = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: 'No file uploaded' });
//     }

//     // Upload file buffer to Cloudinary
//     const result = await new Promise((resolve, reject) => {
//       const uploadStream = cloudinary.uploader.upload_stream(
//         { resource_type: 'auto', public_id: uuidv4() },
//         (error, result) => (error ? reject(error) : resolve(result))
//       );
//       uploadStream.end(req.file.buffer);
//     });

//     // Send response with uploaded image URL
//     res.status(200).json({ message: 'Profile picture uploaded successfully', imageUrl: result.secure_url });
//   } catch (error) {
//     console.error('Cloudinary upload error:', error);
//     res.status(500).json({ message: 'Error uploading to Cloudinary', error: error.message });
//   }
// };


export const uploadProfilePicture = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Upload file buffer to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { resource_type: 'auto', public_id: uuidv4() },
        (error, result) => (error ? reject(error) : resolve(result))
      );
      uploadStream.end(req.file.buffer);
    });

    // Find the user and update the profile picture URL
    const userId = req.user._id;  // Assuming userId is available from JWT token
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profilePic: result.secure_url },  // Save the image URL in the profilePic field
      { new: true }
    );

    res.status(200).json({
      message: 'Profile picture uploaded successfully',
      imageUrl: result.secure_url,
      profilePic: updatedUser.profilePic, // Return the updated profilePic URL
    });
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    res.status(500).json({ message: 'Error uploading to Cloudinary', error: error.message });
  }
};