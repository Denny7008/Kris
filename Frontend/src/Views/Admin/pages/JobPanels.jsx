import React, { useEffect, useState } from "react";
import axios from "axios";
import rec1 from "../../../assets/Rectangle 34.png";
import rec2 from "../../../assets/Rectangle 36.png";
import rec3 from "../../../assets/Rectangle 38.png";
import jhon from "../../../assets/Ellipse 8.png";
import gina from "../../../assets/Ellipse 13.png";
import loe from "../../../assets/Ellipse 14.png";

const JobPanels = () => {
  const [employeeCount, setEmployeeCount] = useState(0);
  const [employees, setEmployees] = useState([]);
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    // Fetch employee count
    axios
      .get("http://localhost:5000/users/employee-count")
      .then((response) => {
        setEmployeeCount(response.data.employeesCount);
      })
      .catch((error) => {
        console.error("Error fetching employee count:", error);
      });

    // Fetch employee data
    axios
      .get("http://localhost:5000/users")
      .then((response) => {
        console.log("Fetched Employees:", response.data);
        const users = response.data.users; // Extract users directly
        setEmployees(users);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });

    axios
      .get("http://localhost:5000/candidates")
      .then((response) => {
        console.log("Fetched Candidates:", response.data);
        setCandidates(response.data);
      })
      .catch((error) => {
        console.error("Error fetching candidates:", error);
      });
  }, []);
  // Empty dependency array to run the effect once when the component mounts

  const jobs = [
    {
      title: "Sales Executive",
      company: "Access Bank",
      logo: rec1,
      time: "20mins ago",
    },
    {
      title: "User Experience Designer",
      company: "Paystack",
      logo: rec2,
      time: "10mins ago",
    },
    {
      title: "Product Manager",
      company: "T-Pay",
      logo: rec3,
      time: "5mins ago",
    },
  ];

  const payrolls = [
    { name: "John Doe", salary: "₦600,000", status: "Paid", logo: jhon },
    { name: "Ginna Loe", salary: "₦150,000", status: "Processing", logo: gina },
    { name: "James Foe", salary: "₦150,000", status: "Processing", logo: loe },
  ];

  return (
    <>
      <div className="flex space-x-6 mx-3 my-4 p-4 bg-[#E3EDF9]">
        {/* Messages */}
        <div className="bg-yellow-500 flex items-center justify-between text-white w-36 p-4 rounded-lg">
          <span className="material-icons text-4xl">email</span>
          <div>
            <p className="text-2xl font-bold">138</p>
            <p className="text-sm">Messages</p>
          </div>
        </div>

        {/* Jobs */}
        <div className="bg-blue-600 flex items-center justify-between text-white w-36 p-4 rounded-lg">
          <span className="material-icons text-4xl">work</span>
          <div>
            <p className="text-2xl font-bold">50</p>
            <p className="text-sm">Jobs</p>
          </div>
        </div>

        {/* Candidates */}
        <div className="bg-green-600 flex items-center justify-between text-white w-36 p-4 rounded-lg">
          <span className="material-icons text-4xl">people</span>
          <div>
            <p className="text-2xl font-bold">100</p>
            <p className="text-sm">Candidates</p>
          </div>
        </div>

        {/* Resumes */}
        <div className="bg-gray-800 flex items-center justify-between text-white w-36 p-4 rounded-lg">
          <span className="material-icons text-4xl">description</span>
          <div>
            <p className="text-2xl font-bold">50</p>
            <p className="text-sm">Resumes</p>
          </div>
        </div>

        {/* Employees */}
        <div className="bg-yellow-600 flex items-center justify-between text-white w-36 p-4 rounded-lg">
          <span className="material-icons text-4xl">person</span>
          <div>
            <p className="text-2xl font-bold">{employeeCount}</p>
            <p className="text-sm">Employees</p>
          </div>
        </div>

        {/* Leaves */}
        <div className="bg-blue-500 flex items-center justify-between text-white w-36 p-4 rounded-lg">
          <span className="material-icons text-4xl">menu_book</span>
          <div>
            <p className="text-2xl font-bold">20</p>
            <p className="text-sm">Leaves</p>
          </div>
        </div>

        {/* Payrolls */}
        <div className="bg-green-500 flex items-center justify-between text-white w-36 p-4 rounded-lg">
          <span className="material-icons text-4xl">attach_money</span>
          <div>
            <p className="text-2xl font-bold">200</p>
            <p className="text-sm">Payrolls</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2   gap-4 p-4 w-[80vw] h-[100vh]">
        {/* Applied Jobs */}
        <div className=" rounded-lg  bg-white shadow p-4 max-w-full">
          <h2 className="text-lg font-semibold mb-4">Applied Jobs</h2>
          <ul className="space-y-3">
            {jobs.map((job, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="text-gray-800 font-medium">{job.title}</h3>
                    <p className="text-gray-500 text-sm">{job.company}</p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm">{job.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Employees */}

        <div className="bg-white rounded-lg shadow p-4 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Employees</h2>
          <ul className="space-y-3">
            {employees.length > 0 ? (
              employees.map((employee, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={employee.profilePic || "/path-to-placeholder.png"}
                      alt={`${employee.firstName} ${employee.lastName}'s avatar`}
                      className="w-10 h-10 rounded-full"
                    />

                    <div>
                      <h3 className="text-gray-800 font-medium">
                        {`${employee.firstName} ${employee.lastName}`}
                      </h3>

                      <p className="text-gray-500 text-sm">
                        Role: {employee.jobTitle || "N/A"}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-blue-500 text-white p-2 rounded-lg">
                      View
                    </button>
                    <button className="bg-green-500 text-white p-2 rounded-lg">
                      Download
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-gray-500">No employees found.</p>
            )}
          </ul>
        </div>

        {/* Candidates */}
        <div className="bg-white rounded-lg shadow p-4 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Candidates</h2>
          <ul className="space-y-3">
            {candidates.length > 0 ? (
              candidates.map((candidate, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={candidate.profilePic || "/path-to-placeholder.png"}
                      alt={`${candidate.name}'s avatar`}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h3 className="text-gray-800 font-medium">
                        {candidate.name}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        Applied for: {candidate.jobTitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`text-sm p-1 rounded-lg ${
                        candidate.atsScore > 50
                          ? "bg-green-100 text-green-500"
                          : "bg-red-100 text-red-500"
                      }`}
                    >
                      ATS Score: 60
                    </span>
                    <button className="bg-blue-500 text-white p-2 rounded-lg">
                      View
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-gray-500">No candidates found.</p>
            )}
          </ul>
        </div>

        {/* April Payrolls */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">April Payrolls</h2>
          <ul className="space-y-3">
            {payrolls.map((payroll, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={payroll.logo}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="text-gray-800 font-medium">
                      {payroll.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Salary Amount: {payroll.salary}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`p-1 rounded-lg text-sm ${
                      payroll.status === "Paid"
                        ? "bg-green-100 text-green-500"
                        : "bg-yellow-100 text-yellow-500"
                    }`}
                  >
                    {payroll.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default JobPanels;
