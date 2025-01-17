
import React, { useState } from 'react';
import ViewProfile from '../pages/ViewProfile';
import EditProfile from '../pages/EditProfile';

const EmployeeManagement = () => {
  const [actionDropdown, setActionDropdown] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [activeView, setActiveView] = useState('table');

  const employees = [
    {
      name: "John Steven Doe",
      dept: "Design",
      jobTitle: "UI UX Designer",
      startDate: "28/04/2022",
      category: "Full time",
      gender: "Male",
    },
    {
      name: "Barry Jhay",
      dept: "IT",
      jobTitle: "Backend Engineer",
      startDate: "28/04/2022",
      category: "Remote",
      gender: "Male",
    },
    {
      name: "Tiwa Cavage",
      dept: "Design",
      jobTitle: "UI UX Designer",
      startDate: "28/04/2022",
      category: "Full time",
      gender: "Female",
    },
    {
      name: "James IDK",
      dept: "Design",
      jobTitle: "UI UX Designer",
      startDate: "28/04/2022",
      category: "Full time",
      gender: "Male",
    },
    {
      name: "Vanessa Chidi",
      dept: "Design",
      jobTitle: "UI UX Designer",
      startDate: "28/04/2022",
      category: "Full time",
      gender: "Female",
    },
    {
      name: "Don Gorgon",
      dept: "Design",
      jobTitle: "UI UX Designer",
      startDate: "28/04/2022",
      category: "Full time",
      gender: "Male",
    },
  ];

  const handleActionClick = (index) => {
    setActionDropdown(index === actionDropdown ? null : index);
  };

  const handleViewProfile = (employee) => {
    setSelectedEmployee(employee);
    setActiveView('view');
    setActionDropdown(null);
  };

  const handleEditProfile = (employee) => {
    setSelectedEmployee(employee);
    setActiveView('edit');
    setActionDropdown(null);
  };

  const handleSaveProfile = (updatedEmployee) => {
    // Here you would typically update the employee data in your backend
    console.log('Saving updated employee:', updatedEmployee);
    setActiveView('table');
    setSelectedEmployee(null);
  };

  const renderContent = () => {
    switch (activeView) {
      case 'view':
        return selectedEmployee && <ViewProfile employee={selectedEmployee} />;
      case 'edit':
        return selectedEmployee && (
          <EditProfile 
            employee={selectedEmployee} 
            onSave={handleSaveProfile}
          />
        );
      default:
        return (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex justify-between mb-4">
              <button className="flex items-center px-4 py-2 bg-gray-200 rounded-md">
                <span className="material-icons mr-2">filter_list</span>
                Filter
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                Export
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-left text-sm font-medium text-gray-700">
                    <th className="p-4">Name(s)</th>
                    <th className="p-4">Dept</th>
                    <th className="p-4">Job Title</th>
                    <th className="p-4">Start Date</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Gender</th>
                    <th className="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee, index) => (
                    <tr key={index} className="border-b hover:bg-gray-100">
                      <td className="p-4">{employee.name}</td>
                      <td className="p-4">{employee.dept}</td>
                      <td className="p-4">{employee.jobTitle}</td>
                      <td className="p-4">{employee.startDate}</td>
                      <td className="p-4">{employee.category}</td>
                      <td className="p-4">{employee.gender}</td>
                      <td className="p-4">
                        <div className="relative">
                          <button
                            onClick={() => handleActionClick(index)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
                          >
                            Actions
                            <span className="material-icons ml-2">arrow_drop_down</span>
                          </button>
                          {actionDropdown === index && (
                            <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-md shadow-lg z-10">
                              <ul className="text-sm text-gray-700">
                                <li
                                  className="p-2 hover:bg-gray-100 cursor-pointer"
                                  onClick={() => handleViewProfile(employee)}
                                >
                                  View Profile
                                </li>
                                <li
                                  className="p-2 hover:bg-gray-100 cursor-pointer"
                                  onClick={() => handleEditProfile(employee)}
                                >
                                  Edit Profile
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-[#E3EDF9]">
      <div className="flex-1">
        <div className="p-6">
          {/* <div className="mb-6">
            <h1 className="text-2xl font-semibold">Employee Management</h1>
            {activeView !== 'table' && (
              <div className="flex items-center mt-2 text-sm text-gray-600">
                <span className="cursor-pointer hover:text-blue-600" onClick={() => setActiveView('table')}>
                  Employee Management
                </span>
                <span className="mx-2">/</span>
                <span>{activeView === 'view' ? 'View Profile' : 'Edit Profile'}</span>
              </div>
            )}
          </div> */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagement;