import React from "react";
import "./index.css"; // Ensure TailwindCSS styles are applied
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import AddTransaction from "./components/addTransaction";
import CSVUploader from "./components/CSVUploader";
import FinanceChart from "./components/FinanceChart";
import FinancialGoal from "./components/FinancialGoal";
import Login from "./components/Login";
import Reminder from "./components/Reminder";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex flex-1 p-4">
        <main className="flex-1">
          <Dashboard />
          <AddTransaction />
          <TransactionList />
          <FinanceChart />
          <FinancialGoal />
          <CSVUploader />
          <Reminder />
        </main>
      </div>
      <Login />
    </div>
  );
}

export default App;
