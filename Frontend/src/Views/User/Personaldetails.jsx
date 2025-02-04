// import React, { useState } from "react";
// import Navbar from "./Usernavbar";

// const Personaldetails = () => {
//   return (
//     <div className="max-w-full w-full px-10 mx-auto bg-white rounded-lg p-6 space-y-8 shadow-lg">
//           <div className="mt-6 flex justify-end">
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
//                   Edit
//                 </button>
//               </div>
//             <div className="max-w-md mx-auto bg-white  rounded-lg p-6">
//               {/* Employee Profile Image */}
//               <div className="flex justify-center mb-4">
//                 <div className="w-24 h-24 rounded-full bg-yellow-300 flex items-center justify-center text-3xl font-bold text-white">
//                   <img
//                     src="https://via.placeholder.com/100"
//                     alt="Profile"
//                     className="rounded-full"
//                   />
//                 </div>
//               </div>

//               {/* Employee Details */}
//               <div className="mt-10 text-center space-y-4">
//                 <div className="text-lg font-bold">John Doe Francis</div>
//                 <div className="text-gray-600">Design & Marketing</div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="mt-10">
//                     <div className="text-sm text-gray-500">Job Title</div>
//                     <div className="text-lg font-semibold">UI / UX Designer</div>
//                   </div>
//                   <div className="mt-10">
//                     <div className="text-sm text-gray-500">Job Category</div>
//                     <div className="text-lg font-semibold">Full time</div>
//                   </div>
//                 </div>
//               </div>

//               {/* Edit Button */}

//             </div>
//           </div>
//   );
// };

// export default Personaldetails;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Personaldetails = () => {
//   const [profilePic, setProfilePic] = useState(
//     "https://via.placeholder.com/100"
//   );
//   const [loading, setLoading] = useState(false);
//   const [imageInputRef, setImageInputRef] = useState(null);
//   const [userName, setUserName] = useState(""); // State to store user name
//   const [jobTitle, setJobTitle] = useState("");

//   const token = localStorage.getItem("authToken");

//   // Handle image selection
//   const handleImageChange = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       // Upload the file to the backend (Cloudinary)
//       await uploadToBackend(file);
//     }
//   };

//   const uploadToBackend = async (file) => {
//     setLoading(true);
//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/upload-profile",
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );

//       setProfilePic(response.data.imageUrl);
//       setLoading(false);
//       alert("Image uploaded successfully!");
//     } catch (error) {
//       setLoading(false);
//       alert("Error uploading image.");
//       console.error(error);
//     }
//   };

//   // Trigger file input when profile image is clicked
//   const handleImageClick = () => {
//     imageInputRef?.click();
//   };

//   useEffect(() => {
//     const fetchUserData = async () => {
//       if (!token) {
//         setError("No authentication token found. Please log in.");
//         return;
//       }

//       try {
//         // Fetch user data using the token
//         const userResponse = await axios.get(
//           "http://localhost:5000/get-user-data",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         console.log(userResponse);

//         try {
//           const { name: fetchedUserName, jobTitle: fetchedJobTitle } = userResponse.data || {};
        
//           if (!fetchedUserName || !fetchedJobTitle) {
//             console.error("Error: Missing user details.");
//             return;
//           }
        
//           setUserName(fetchedUserName);
//           setJobTitle(fetchedJobTitle);
        
//           console.log("User Name:", fetchedUserName);
//           console.log("Job Title:", fetchedJobTitle);
//         } catch (error) {
//           console.error("Error fetching user data:", error);
//         }
//     };

//     fetchUserData();
//   }, [token]);


//   return (
//     <div className="max-w-full w-full px-10 mx-auto bg-white rounded-lg p-6 space-y-8 shadow-lg">
//       <div className="mt-6 flex justify-end">
//         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
//           Edit
//         </button>
//       </div>
//       <div className="max-w-md mx-auto bg-white rounded-lg p-6">
//         {/* Employee Profile Image */}
//         <div className="flex justify-center mb-4 relative">
//           <div className="w-24 h-24 rounded-full bg-yellow-300 flex items-center justify-center text-3xl font-bold text-white cursor-pointer">
//             <img
//               src={profilePic}
//               alt="Profile"
//               className="rounded-full"
//               onClick={handleImageClick}
//             />
//           </div>
//         </div>

//         {/* Hidden file input */}
//         <input
//           ref={(input) => setImageInputRef(input)}
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           className="hidden"
//         />

//         {/* Loading indicator */}
//         {loading && <div>Uploading...</div>}

//         {/* Employee Details */}
//         <div className="mt-10 text-center space-y-4">
//           <div className="text-lg font-bold">{userName || "username"}</div>
//           <div className="text-gray-600">Design & Marketing</div>

//           <div className="grid grid-cols-2 gap-4">
//             <div className="mt-10">
//               <div className="text-sm text-gray-500">Job Title</div>
//               <div className="text-lg font-semibold">{jobTitle || "jobTitle"}</div>
//             </div>
//             <div className="mt-10">
//               <div className="text-sm text-gray-500">Job Category</div>
//               <div className="text-lg font-semibold">Full time</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Personaldetails;





import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Personaldetails = () => {
  const [profilePic, setProfilePic] = useState("https://via.placeholder.com/100");
  const [loading, setLoading] = useState(false);
  const imageInputRef = useRef(null); // Use useRef instead of useState
  const [userName, setUserName] = useState(""); 
  const [jobTitle, setJobTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState(""); // Error state for handling error messages

  const token = localStorage.getItem("authToken");

  // Handle image selection
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      await uploadToBackend(file);
    }
  };

  // Upload image to backend
  const uploadToBackend = async (file) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
  
    try {
      const response = await axios.post("http://localhost:5000/upload-profile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
  
      const imageUrl = response.data.imageUrl;
      setProfilePic(imageUrl);
      
      // Store the image URL in localStorage
      localStorage.setItem("profilePic", imageUrl);
  
      alert("Image uploaded successfully!");
    } catch (error) {
      alert("Error uploading image.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Trigger file input when profile image is clicked
  const handleImageClick = () => {
    imageInputRef.current?.click();
  };

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      if (!token) {
        setError("No authentication token found. Please log in.");
        return;
      }
  
      try {
        const userResponse = await axios.get("http://localhost:5000/get-user-data", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        console.log("User Response:", userResponse);
  
        const { name: fetchedUserName, jobTitle: fetchedJobTitle, department: fetchedDepartment, category: fetchedCategory, profilePic: fetchedProfilePic } = userResponse.data || {};
  
        if (!fetchedUserName || !fetchedJobTitle || !fetchedCategory || !fetchedDepartment) {
          console.error("Error: Missing user details.");
          return;
        }
  
        setUserName(fetchedUserName);
        setJobTitle(fetchedJobTitle);
        setCategory(fetchedCategory);
        setDepartment(fetchedDepartment);
        setProfilePic(fetchedProfilePic || "https://via.placeholder.com/100");  // Set profile picture
  
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to fetch user data.");
      }
    };
  
    fetchUserData();
  }, [token]); // Ensure this runs when 'token' changes
  

  
  return (
    <div className="max-w-full w-full px-10 mx-auto bg-white rounded-lg p-6 space-y-8 shadow-lg">
      <div className="mt-6 flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
          Edit
        </button>
      </div>

      <div className="max-w-md mx-auto bg-white rounded-lg p-6">
        {/* Employee Profile Image */}
        <div className="flex justify-center mb-4 relative">
          <div className="w-24 h-24 rounded-full bg-yellow-300 flex items-center justify-center text-3xl font-bold text-white cursor-pointer">
            <img
              src={profilePic}
              alt="Profile"
              className="rounded-full"
              onClick={handleImageClick}
            />
          </div>
        </div>

        {/* Hidden file input */}
        <input
          ref={imageInputRef} // Use useRef instead of useState
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />

        {/* Loading indicator */}
        {loading && <div>Uploading...</div>}
        {error && <div className="text-red-500">{error}</div>} {/* Show error if exists */}

        {/* Employee Details */}
        <div className="mt-10 text-center space-y-4">
          <div className="text-lg font-bold">{userName || "Username"}</div>
          <div className="text-gray-600">{department || "Department"}</div>

          <div className="grid grid-cols-2 gap-4">
            <div className="mt-10">
              <div className="text-sm text-gray-500">Job Title</div>
              <div className="text-lg font-semibold">{jobTitle || "Job Title"}</div>
            </div>
            <div className="mt-10">
              <div className="text-sm text-gray-500">Job Category</div>
              <div className="text-lg font-semibold">{category || "Fulltime"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personaldetails;
