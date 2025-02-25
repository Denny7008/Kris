

import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Usernavbar";

const PayslipSection = () => {
  const [payslips, setPayslips] = useState([]);
  const [selectedPayslip, setSelectedPayslip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserAndPayslips = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) throw new Error("User not authenticated");
  
        // Fetch user data
        const userResponse = await axios.get("http://localhost:5000/get-user-data", {
          headers: { Authorization: `Bearer ${token}` },
        });
  
        console.log("User API Response:", userResponse.data);
  
        const userId = userResponse?.data?.userId;
        if (!userId) throw new Error("User ID not found");
  
        // Fetch payslips using userId
        const payslipResponse = await axios.get(`http://localhost:5000/api/payslips/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
  
        console.log("Payslips API Response:", payslipResponse.data);
  
        if (payslipResponse.data.success) {
          setPayslips(payslipResponse.data.payslips);
          setSelectedPayslip(payslipResponse.data.payslips[0]);
        } else {
          throw new Error("No payslips found");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message || "Failed to load data");
      } finally {
        setLoading(false);
      }
    };
  
    fetchUserAndPayslips();
  }, []);
  

  return (
    <div className="bg-[#E3EDF9] min-h-screen">
      <Navbar />
      <div className="p-6 max-w-6xl mx-auto">
        {payslips.length > 0 ? (
          <>
            <div className="flex space-x-4 mb-6 overflow-x-auto">
              {payslips.map((payslip) => (
                <button
                  key={payslip._id}
                  className={`px-4 py-2 rounded-lg shadow-md ${
                    selectedPayslip && selectedPayslip.period === payslip.period
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setSelectedPayslip(payslip)}
                >
                  {payslip.period}
                </button>
              ))}
            </div>

            {selectedPayslip && (
              <>
                <div className="grid grid-cols-3 gap-4 mb-6 text-white text-center">
                  <div className="bg-blue-500 p-4 rounded-lg">
                    ₹{selectedPayslip.totalEarnings}
                    <br />
                    Total Earnings
                  </div>
                  <div className="bg-yellow-500 p-4 rounded-lg">
                    ₹{selectedPayslip.totalDeductions}
                    <br />
                    Total Deductions
                  </div>
                  <div className="bg-green-500 p-4 rounded-lg">
                    ₹{selectedPayslip.netPay}
                    <br />
                    Net Pay
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div className="bg-pink-400 p-4 rounded-lg">
                    {selectedPayslip.period}
                    <br />
                    Period Name
                  </div>
                  <div className="bg-purple-400 p-4 rounded-lg">
                    {new Date(selectedPayslip.payDate).toDateString()}
                    <br />
                    Pay Date
                  </div>
                  <div className="bg-blue-400 p-4 rounded-lg">
                    {selectedPayslip.currency}
                    <br />
                    Currency
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Earnings</h3>
                    {selectedPayslip.earnings.map((item) => (
                      <div key={item._id} className="flex justify-between border-b py-2">
                        <span>{item.name}</span>
                        <span className="font-semibold">₹{item.amount}</span>
                      </div>
                    ))}
                    <div className="flex justify-between font-semibold mt-4">
                      <span>Total Earnings</span>
                      <span>₹{selectedPayslip.totalEarnings}</span>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Deductions</h3>
                    {selectedPayslip.deductions.map((item) => (
                      <div key={item._id} className="flex justify-between border-b py-2">
                        <span>{item.name}</span>
                        <span className="font-semibold">₹{item.amount}</span>
                      </div>
                    ))}
                    <div className="flex justify-between font-semibold mt-4">
                      <span>Total Deductions</span>
                      <span>₹{selectedPayslip.totalDeductions}</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <p className="text-center text-gray-600">No payslips available.</p>
        )}
      </div>
    </div>
  );
};

export default PayslipSection;
