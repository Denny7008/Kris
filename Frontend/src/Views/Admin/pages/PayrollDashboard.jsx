import React from 'react';
import { Banknote, User } from 'lucide-react';

const PayrollDashboard = () => {
  const employees = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      bankDetails: {
        bankName: 'HDFC Bank',
        accountNumber: '1234567890',
        ifscCode: 'HDFC0001234'
      },
      salary: 50000
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      bankDetails: {
        bankName: 'ICICI Bank',
        accountNumber: '0987654321',
        ifscCode: 'ICIC0004321'
      },
      salary: 60000
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Payroll Management</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3"><User className="inline mr-2" />Employee</th>
            <th className="p-3">Bank Details</th>
            <th className="p-3">Salary</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{employee.firstName} {employee.lastName}</td>
              <td className="p-3">
                <p>Bank: {employee.bankDetails.bankName}</p>
                <p>Acc: {employee.bankDetails.accountNumber}</p>
                <p>IFSC: {employee.bankDetails.ifscCode}</p>
              </td>
              <td className="p-3 text-green-600 font-semibold">
                ₹ {employee.salary}
              </td>
              <td className="p-3">
                <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                  <Banknote className="inline mr-2" />Pay Now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PayrollDashboard;
