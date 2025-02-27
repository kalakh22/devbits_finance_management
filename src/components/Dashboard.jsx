import React from "react";

const Dashboard = ({ income, expenses, savings }) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-green-500 text-white p-4 rounded-lg">
          <h3>Total Income</h3>
          <p>₹{income}</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-lg">
          <h3>Total Expenses</h3>
          <p>₹{expenses}</p>
        </div>
        <div className="bg-blue-500 text-white p-4 rounded-md shadow-md">
  <h3>Savings</h3>
  <p>₹{savings}</p>
</div>

      </div>
    </div>
  );
};

export default Dashboard;
