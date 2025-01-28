// import React from "react";
// import { Link, Outlet, useNavigate } from "react-router-dom";
// import AdminUpperNavbar from "../../Components/AdminUpperNavbar";
// import Usernavbar from "./Usernavbar";

// const LeaveDashboard = () => {
//   const navigate = useNavigate();

//   const leaveTypes = [
//     { type: "Annual Leave", route: "/leavedashboard/annualleave" },
//     { type: "Sick Leave", route: "/leavedashboard/sickleave" },
//     { type: "Maternity Leave", route: "/maternity-leave" },
//     { type: "Compassionate Leave", route: "/compassionate-leave" },
//   ];

//   const leaveData = [
//     {
//       name: "John Steven Doe",
//       duration: 5,
//       startDate: "22/04/2022",
//       endDate: "26/04/2022",
//       type: "Sick",
//       reason: "Personal",
//     },
//     {
//       name: "John Steven Doe",
//       duration: 7,
//       startDate: "22/04/2022",
//       endDate: "30/04/2022",
//       type: "Exam",
//       reason: "Examination",
//     },
//     {
//       name: "John Steven Doe",
//       duration: 120,
//       startDate: "22/04/2022",
//       endDate: "28/06/2022",
//       type: "Maternity",
//       reason: "Child Care",
//     },
//     {
//       name: "John Steven Doe",
//       duration: 5,
//       startDate: "22/04/2022",
//       endDate: "26/04/2022",
//       type: "Sick",
//       reason: "Personal",
//     },
//   ];

//   return (
//     <div className="bg-[#E3EDF9] py-4">
//       <div className="p-4 ml-6 mr-6 bg-white text-2xl hover:text-blue-500">
//         Dashboard/applyforleave
//       </div>

//       <div className="p-6 bg-white mt-8 ml-8 mr-8">
//         <h1 className="text-2xl mt-4 font-semibold mb-6">Leave Application</h1>

//         <div className="grid grid-cols-4 gap-4 mb-8">
//           {leaveTypes.map((leave, index) => (
//             <div
//               key={index}
//               className="bg-blue-600 shadow rounded-lg p-6 flex flex-col items-center"
//             >
//               <span className="text-4xl font-bold text-white">{60}</span>
//               <Link to="/userlogin/dashboard/leaveapply/annualleave"
//                 className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-green-600">
//                 {leave.type}
//               </Link>
//             </div>
//           ))}
//         </div>

//         <div className="bg-white shadow rounded-lg p-6 h-[60vh]">
//           <h2 className="text-xl font-semibold mb-4">Leave History</h2>
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="bg-gray-200 text-left">
//                 <th className="p-4">Name(s)</th>
//                 <th className="p-4">Duration(s)</th>
//                 <th className="p-4">Start Date</th>
//                 <th className="p-4">End Date</th>
//                 <th className="p-4">Type</th>
//                 <th className="p-4">Reason(s)</th>
//                 <th className="p-4">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {leaveData.map((leave, index) => (
//                 <tr
//                   key={index}
//                   className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
//                 >
//                   <td className="p-4">{leave.name}</td>
//                   <td className="p-4">{leave.duration}</td>
//                   <td className="p-4">{leave.startDate}</td>
//                   <td className="p-4">{leave.endDate}</td>
//                   <td className="p-4">
//                     <button className="px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
//                       {leave.type}
//                     </button>
//                   </td>
//                   <td className="p-4">{leave.reason}</td>
//                   <td className="p-4">
//                     <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
//                       Actions
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default LeaveDashboard;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SuccessModal from "./SucessPop"; // Import the Modal component
import { Link } from "react-router-dom";

const LeaveDashboard = () => {
  const [modalData, setModalData] = useState(null);

  const leaveTypes = [
    { type: "Annual Leave", route: "/leavedashboard/annualleave" },
    { type: "Sick Leave", route: "/leavedashboard/sickleave" },
    { type: "Maternity Leave", route: "/maternity-leave" },
    { type: "Compassionate Leave", route: "/compassionate-leave" },
  ];
 

  const leaveData = [
    {
      name: "John Steven Doe",
      duration: 5,
      startDate: "22/04/2022",
      endDate: "26/04/2022",
      type: "Sick",
      reason: "Personal",
    },
    {
      name: "John Steven Doe",
      duration: 7,
      startDate: "22/04/2022",
      endDate: "30/04/2022",
      type: "Exam",
      reason: "Examination",
    },
    {
      name: "John Steven Doe",
      duration: 120,
      startDate: "22/04/2022",
      endDate: "28/06/2022",
      type: "Maternity",
      reason: "Child Care",
    },
    {
      name: "John Steven Doe",
      duration: 5,
      startDate: "22/04/2022",
      endDate: "26/04/2022",
      type: "Sick",
      reason: "Personal",
    },
  ];

  const openModal = (leave) => {
    setModalData(leave);
  };

  const closeModal = () => {
    setModalData(null);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isModalVisible, setModalVisible] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setModalVisible(true); // Show the modal on form submission
    reset();
  };

  const handleCloseModal = () => {
    setModalVisible(false); // Hide the modal
  };

  return (
    <div className="bg-[#E3EDF9] py-4">
      <div className="p-4 ml-6 mr-6 bg-white text-2xl hover:text-blue-500">
        Dashboard/applyforleave
      </div>

      <div className="p-6 bg-white mt-8 ml-8 mr-8">
        <h1 className="text-2xl mt-4 font-semibold mb-6">Leave Application</h1>

        <div className="grid grid-cols-4 gap-4 mb-8">
          {leaveTypes.map((leave, index) => (
            <div
              key={index}
              className="bg-blue-600 shadow rounded-lg p-6 flex flex-col items-center"
            >
              <span className="text-4xl font-bold text-white">60</span>
              <button
                onClick={() => openModal(leave)}
                className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-green-600"
              >
                {leave.type}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white shadow rounded-lg p-6 h-[60vh]">
          <h2 className="text-xl font-semibold mb-4">Leave History</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-4">Name(s)</th>
                <th className="p-4">Duration(s)</th>
                <th className="p-4">Start Date</th>
                <th className="p-4">End Date</th>
                <th className="p-4">Type</th>
                <th className="p-4">Reason(s)</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaveData.map((leave, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="p-4">{leave.name}</td>
                  <td className="p-4">{leave.duration}</td>
                  <td className="p-4">{leave.startDate}</td>
                  <td className="p-4">{leave.endDate}</td>
                  <td className="p-4">
                    <button className="px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                      {leave.type}
                    </button>
                  </td>
                  <td className="p-4">{leave.reason}</td>
                  <td className="p-4">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                      Actions
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="rounded-lg shadow-lg  h-[90%] w-[40%] overflow-y-auto relative scrollbar-hidden">
            <div className="bg-[#E3EDF9]">
              <div className="min-h-screen  bg-[#E3EDF9] flex items-center justify-center">
                <div className="bg-white shadow-lg rounded-lg p-8 w-[50vw]">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center">
                      <span className="material-icons mr-2">book</span>
                      Leave Application
                    </h1>
                    <p className="text-gray-600 mb-6 flex items-center justify-center">
                      Fill the required fields below to apply for {modalData.type}.
                    </p>
                    <button
                      onClick={closeModal}
                      className="absolute top-10 text-5xl right-10 text-black hover:text-red-500 p-2 rounded-lg hover:bg-red-100 transition-all ease-in-out"
                    >
                      &times;
                    </button>


                  <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    {/* Leave Type */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">
                        Leave Type
                      </label>
                      <input
                        type="text"
                        value={modalData.type}
                        readOnly
                        className="w-full bg-[#E3EDF9] p-2 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    {/* Start Date and End Date */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-1">
                          Start Date
                        </label>
                        <input
                          type="date"
                          {...register("startDate", {
                            required: "Start date is required",
                          })}
                          className="w-full bg-[#E3EDF9] p-2 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.startDate && (
                          <p className="text-red-500 text-sm">
                            {errors.startDate.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-1">
                          End Date
                        </label>
                        <input
                          type="date"
                          {...register("endDate", {
                            required: "End date is required",
                          })}
                          className="w-full bg-[#E3EDF9] p-2 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.endDate && (
                          <p className="text-red-500 text-sm">
                            {errors.endDate.message}
                          </p>
                        )}
                      </div>
                    </div>
                    {/* Duration */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">
                        Duration
                      </label>
                      <input
                        type="number"
                        value="60"
                        readOnly
                        className="w-full bg-[#E3EDF9] p-2 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    {/* Resumption Date */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">
                        Resumption Date
                      </label>
                      <input
                        type="date"
                        {...register("resumptionDate", {
                          required: "Resumption date is required",
                        })}
                        className="w-full bg-[#E3EDF9] p-2  border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.resumptionDate && (
                        <p className="text-red-500 text-sm">
                          {errors.resumptionDate.message}
                        </p>
                      )}
                    </div>

                    {/* Reason for Leave */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">
                        Reason for Leave
                      </label>
                      <textarea
                        rows="3"
                        {...register("reason", {
                          required: "Reason is required",
                        })}
                        className="w-full bg-[#E3EDF9] p-2 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Provide a reason for your leave request"
                      ></textarea>
                      {errors.reason && (
                        <p className="text-red-500 text-sm">
                          {errors.reason.message}
                        </p>
                      )}
                    </div>

                    {/* Attach Handover Document */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">
                        Attach Handover Document
                      </label>
                      <input
                        type="file"
                        {...register("handoverDocument", {
                          required: "Handover document is required",
                        })}
                        className="w-full text-white  border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.handoverDocument && (
                        <p className="text-red-500 text-sm">
                          {errors.handoverDocument.message}
                        </p>
                      )}
                    </div>

                    {/* Choose Relief Officer */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">
                        Choose Relief Officer
                      </label>
                      <select
                        {...register("reliefOfficer", {
                          required: "Relief officer selection is required",
                        })}
                        className="w-full bg-[#E3EDF9] p-2 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select your relief officer</option>
                        <option value="1">Relief Officer 1</option>
                        <option value="2">Relief Officer 2</option>
                        <option value="3">Relief Officer 3</option>
                      </select>
                      {errors.reliefOfficer && (
                        <p className="text-red-500 text-sm">
                          {errors.reliefOfficer.message}
                        </p>
                      )}
                    </div>

                    {/* Submit and Reset Buttons */}
                    <div className="flex justify-between mt-4">
                      <button
                        type="submit"
                        className="bg-green-500 w-60 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        onClick={() => reset()}
                        className="bg-red-500 text-white w-60 py-2 px-6 rounded-lg shadow-md hover:bg-red-600"
                      >
                        Reset
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Modal Component */}
              <SuccessModal
                isVisible={isModalVisible}
                onClose={handleCloseModal}
                message="Your leave application will be reviewed by the admin."
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaveDashboard;
