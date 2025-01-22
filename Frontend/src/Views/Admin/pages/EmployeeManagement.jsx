import React, { useState, useEffect } from 'react';
import ViewProfile from '../pages/ViewProfile';
import EditProfile from '../pages/EditProfile';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmployeeManagement = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [actionDropdown, setActionDropdown] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [activeView, setActiveView] = useState('table');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        console.log("Fetched Employees:", response.data);
        setEmployees(response.data.users); // Set the fetched data to state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching employee data:", error);
        setError('Unable to load employee data');
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

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
    navigate(`/edit-profile/${employee.id}`);
  };

  const handleSaveProfile = async (updatedEmployee) => {
    try {
      const response = await fetch(`http://localhost:5000/users/${updatedEmployee.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedEmployee),
      });

      if (!response.ok) {
        throw new Error('Failed to save updated employee');
      }

      setEmployees((prevEmployees) =>
        prevEmployees.map((emp) =>
          emp.id === updatedEmployee.id ? updatedEmployee : emp
        )
      );

      setActiveView('table');
      setSelectedEmployee(null);
    } catch (error) {
      console.error(error);
      alert('Failed to save employee profile');
    }
  };

  const renderContent = () => {
    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div className="text-red-500">{error}</div>;
    }
    if (!Array.isArray(employees)) {
      return <div className="text-red-500">Invalid employee data format</div>;
    }

    switch (activeView) {
      case 'view':
        return selectedEmployee && <ViewProfile employee={selectedEmployee} />;
      case 'edit':
        return (
          selectedEmployee && (
            <EditProfile
              employee={selectedEmployee}
              onSave={handleSaveProfile}
            />
          )
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
                    <tr key={employee._id} className="border-b hover:bg-gray-100">
                      <td className="p-4">{employee.firstName}</td>
                      <td className="p-4">{employee.department}</td>
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
        <div className="p-6">{renderContent()}</div>
      </div>
    </div>
  );
};

export default EmployeeManagement;
