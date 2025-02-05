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





// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";

// const Personaldetails = () => {
//   const [profilePic, setProfilePic] = useState("https://via.placeholder.com/100");
//   const [loading, setLoading] = useState(false);
//   const imageInputRef = useRef(null); // Use useRef instead of useState
//   const [userName, setUserName] = useState(""); 
//   const [jobTitle, setJobTitle] = useState("");
//   const [department, setDepartment] = useState("");
//   const [category, setCategory] = useState("");
//   const [error, setError] = useState(""); // Error state for handling error messages

//   const token = localStorage.getItem("authToken");

//   // Handle image selection
//   const handleImageChange = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       await uploadToBackend(file);
//     }
//   };

//   // Upload image to backend
//   const uploadToBackend = async (file) => {
//     setLoading(true);
//     const formData = new FormData();
//     formData.append("file", file);
  
//     try {
//       const response = await axios.post("http://localhost:5000/upload-profile", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
  
//       const imageUrl = response.data.imageUrl;
//       setProfilePic(imageUrl);
      
//       // Store the image URL in localStorage
//       localStorage.setItem("profilePic", imageUrl);
  
//       alert("Image uploaded successfully!");
//     } catch (error) {
//       alert("Error uploading image.");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Trigger file input when profile image is clicked
//   const handleImageClick = () => {
//     imageInputRef.current?.click();
//   };

//   // Fetch user data
//   useEffect(() => {
//     const fetchUserData = async () => {
//       if (!token) {
//         setError("No authentication token found. Please log in.");
//         return;
//       }
  
//       try {
//         const userResponse = await axios.get("http://localhost:5000/get-user-data", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
  
//         console.log("User Response:", userResponse);
  
//         const { name: fetchedUserName, jobTitle: fetchedJobTitle, department: fetchedDepartment, category: fetchedCategory, profilePic: fetchedProfilePic } = userResponse.data || {};
  
//         if (!fetchedUserName || !fetchedJobTitle || !fetchedCategory || !fetchedDepartment) {
//           console.error("Error: Missing user details.");
//           return;
//         }
  
//         setUserName(fetchedUserName);
//         setJobTitle(fetchedJobTitle);
//         setCategory(fetchedCategory);
//         setDepartment(fetchedDepartment);
//         setProfilePic(fetchedProfilePic || "https://via.placeholder.com/100");  // Set profile picture
  
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         setError("Failed to fetch user data.");
//       }
//     };
  
//     fetchUserData();
//   }, [token]); // Ensure this runs when 'token' changes
  

  
//   return (
//     <div className="max-w-full w-full px-10 mx-auto bg-white rounded-lg p-6 space-y-8 shadow-lg">
//       <div className="mt-6 flex justify-end">
//         <button onClick={handleImageClick} className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
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
//             />
            
//           </div>
//         </div>

//         {/* Hidden file input */}
//         <input
//           ref={imageInputRef} // Use useRef instead of useState
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           className="hidden"
//         />

//         {/* Loading indicator */}
//         {loading && <div>Uploading...</div>}
//         {error && <div className="text-red-500">{error}</div>} {/* Show error if exists */}

//         {/* Employee Details */}
//         <div className="mt-10 text-center space-y-4">
//           <div className="text-lg font-bold">{userName || "Username"}</div>
//           <div className="text-gray-600">{department || "Department"}</div>

//           <div className="grid grid-cols-2 gap-4">
//             <div className="mt-10">
//               <div className="text-sm text-gray-500">Job Title</div>
//               <div className="text-lg font-semibold">{jobTitle || "Job Title"}</div>
//             </div>
//             <div className="mt-10">
//               <div className="text-sm text-gray-500">Job Category</div>
//               <div className="text-lg font-semibold">{category || "Fulltime"}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Personaldetails;




// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";

// const Personaldetails = () => {
//   const [profilePic, setProfilePic] = useState("https://via.placeholder.com/100");
//   const [loading, setLoading] = useState(false);
//   const imageInputRef = useRef(null);
//   const [userName, setUserName] = useState(""); 
//   const [jobTitle, setJobTitle] = useState("");
//   const [department, setDepartment] = useState("");
//   const [category, setCategory] = useState("");
//   const [error, setError] = useState("");

//   // Fetch token & userId from localStorage
//   const token = localStorage.getItem("authToken");
//   const userId = localStorage.getItem("userId");

//   // Debugging logs
//   console.log("User ID from Local Storage:", userId);
//   console.log("Auth Token from Local Storage:", token);

//   // Handle image selection
//   const handleImageChange = async (e) => {
//     console.log("User ID before upload:", userId);
    
//     if (!userId) {
//       alert("User ID is missing. Cannot upload image.");
//       return;
//     }

//     const file = e.target.files[0];
//     if (file) {
//       await uploadToBackend(file);
//     }
//   };

//   // Upload image to backend
//   const uploadToBackend = async (file) => {
//     console.log("Uploading image... User ID:", userId);

//     if (!userId) {
//       console.error("Cannot upload: User ID is missing.");
//       return;
//     }

//     setLoading(true);
//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await axios.post(
//         `http://localhost:5000/upload-profile/${userId}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             "Authorization": `Bearer ${token}`,
//           },
//         }
//       );

//       console.log("Upload Response:", response.data);

//       const imageUrl = response.data.imageUrl;
//       setProfilePic(imageUrl);
//       localStorage.setItem("profilePic", imageUrl);

//       // Update user profile with new image
//       await updateUserProfile(imageUrl);

//       alert("Image uploaded successfully!");
//     } catch (error) {
//       console.error("Error uploading image:", error.response?.data || error.message);
//       alert("Error uploading image.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Update user profile with new image URL
//   const updateUserProfile = async (imageUrl) => {
//     if (!userId) {
//       console.error("Cannot update profile: User ID is missing.");
//       return;
//     }

//     try {
//       const response = await axios.put(
//         `http://localhost:5000/users/${userId}`,
//         { profilePicc: imageUrl }, // Fixed request body placement
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       console.log("Profile updated:", response.data);
//     } catch (error) {
//       console.error("Error updating profile picture:", error.response?.data || error.message);
//     }
//   };

//   // Fetch user data when the component loads
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const userResponse = await axios.get("http://localhost:5000/get-user-data", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
  
//         const { name, jobTitle, department, category, profilePic } = userResponse.data || {};
  
//         setUserName(name || "Username");
//         setJobTitle(jobTitle || "Job Title");
//         setDepartment(department || "Department");
//         setCategory(category || "Fulltime");
  
//         // Fetch from localStorage if API does not return updated URL
//         const storedProfilePic = localStorage.getItem("profilePic");
//         setProfilePic(profilePic || storedProfilePic || "https://via.placeholder.com/100");
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         setError("Failed to fetch user data.");
//       }
//     };
  
//     fetchUserData();
//   }, [token, userId, profilePic]);  // Add profilePic as a dependency to trigger re-render
  

//   // Trigger file input when profile image is clicked
//   const handleImageClick = () => {
//     imageInputRef.current?.click();
//   };

//   return (
//     <div className="max-w-full w-full px-10 mx-auto bg-white rounded-lg p-6 space-y-8 shadow-lg">
//       <div className="mt-6 flex justify-end">
//         <button onClick={handleImageClick} className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
//           Edit
//         </button>
//       </div>

//       <div className="max-w-md mx-auto bg-white rounded-lg p-6">
//         <div className="flex justify-center mb-4 relative">
//           <div className="w-24 h-24 rounded-full bg-yellow-300 flex items-center justify-center text-3xl font-bold text-white cursor-pointer">
//             <img src={profilePic} alt="Profile" className="rounded-full" />
//           </div>
//         </div>

//         <input
//           ref={imageInputRef}
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           className="hidden"
//         />

//         {loading && <div>Uploading...</div>}
//         {error && <div className="text-red-500">{error}</div>}

//         <div className="mt-10 text-center space-y-4">
//           <div className="text-lg font-bold">{userName}</div>
//           <div className="text-gray-600">{department}</div>
//           <div className="grid grid-cols-2 gap-4">
//             <div className="mt-10">
//               <div className="text-sm text-gray-500">Job Title</div>
//               <div className="text-lg font-semibold">{jobTitle}</div>
//             </div>
//             <div className="mt-10">
//               <div className="text-sm text-gray-500">Job Category</div>
//               <div className="text-lg font-semibold">{category}</div>
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
  const imageInputRef = useRef(null);
  const [userName, setUserName] = useState(""); 
  const [jobTitle, setJobTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const token = localStorage.getItem("authToken");
  const userId = localStorage.getItem("userId");

  console.log("User ID from Local Storage:", userId);
  console.log("Auth Token from Local Storage:", token);

  

  // Handle image selection
  const handleImageChange = async (e) => {
    console.log("User ID before upload:", userId);
    
    if (!userId) {
      alert("User ID is missing. Cannot upload image.");
      return;
    }

    const file = e.target.files[0];
    if (file) {
      await uploadToBackend(file);
    }
  };

  // Upload image to backend
  // const uploadToBackend = async (file) => {
  //   console.log("Uploading image... User ID:", userId);

  //   if (!userId) {
  //     console.error("Cannot upload: User ID is missing.");
  //     return;
  //   }

  //   setLoading(true);
  //   const formData = new FormData();
  //   formData.append("file", file);

  //   try {
  //     await axios.post(
  //       `http://localhost:5000/upload-profile/${userId}`,
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //           "Authorization": `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     alert("Image uploaded successfully!");
  //     fetchProfileImage(); // Re-fetch profile image after upload
  //   } catch (error) {
  //     console.error("Error uploading image:", error.response?.data || error.message);
  //     alert("Error uploading image.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };



  const uploadToBackend = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
  
    try {
      const response = await axios.post(
        `http://localhost:5000/upload-profile/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.message);
    } catch (error) {
      console.error("Error uploading image:", error.response?.data || error.message);
    }
  };
  
  // Fetch profile image from backend
  const fetchProfileImage = async () => {
    if (!userId) return;

    try {
      const response = await axios.get(`http://localhost:5000/profile-image/${userId}`);
      setProfilePic(response.data.imageUrl); // Set the Base64 image
    } catch (error) {
      console.error("Error fetching profile image:", error.response?.data || error.message);
    }
  };

  // Fetch user data when the component loads
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get("http://localhost:5000/get-user-data", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const { name, jobTitle, department, category } = userResponse.data || {};

        setUserName(name || "Username");
        setJobTitle(jobTitle || "Job Title");
        setDepartment(department || "Department");
        setCategory(category || "Fulltime");

        fetchProfileImage(); // Fetch profile image
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to fetch user data.");
      }
    };

    fetchUserData();
  }, [token, userId]);

  // Trigger file input when profile image is clicked
  const handleImageClick = () => {
    imageInputRef.current?.click();
  };

  return (
    <div className="max-w-full w-full px-10 mx-auto bg-white rounded-lg p-6 space-y-8 shadow-lg">
      <div className="mt-6 flex justify-end">
        <button onClick={handleImageClick} className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
          Edit
        </button>
      </div>

      <div className="max-w-md mx-auto bg-white rounded-lg p-6">
        <div className="flex justify-center mb-4 relative">
          <div className="w-24 h-24 rounded-full bg-yellow-300 flex items-center justify-center text-3xl font-bold text-white cursor-pointer">
            <img src={profilePic} alt="Profile" className="rounded-full" />
          </div>
        </div>

        <input
          ref={imageInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />

        {loading && <div>Uploading...</div>}
        {error && <div className="text-red-500">{error}</div>}

        <div className="mt-10 text-center space-y-4">
          <div className="text-lg font-bold">{userName}</div>
          <div className="text-gray-600">{department}</div>
          <div className="grid grid-cols-2 gap-4">
            <div className="mt-10">
              <div className="text-sm text-gray-500">Job Title</div>
              <div className="text-lg font-semibold">{jobTitle}</div>
            </div>
            <div className="mt-10">
              <div className="text-sm text-gray-500">Job Category</div>
              <div className="text-lg font-semibold">{category}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personaldetails;








