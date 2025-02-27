import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import FinanceChart from "./components/FinanceChart";
import CSVUploader from "./components/CSVUploader";
import Login from "./components/Login";
import Reminder from "./components/Reminder";
import FinancialGoal from "./components/FinancialGoal";

console.log("kaam ho raha hai");

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAddTransaction = (txn) => {
    setTransactions([...transactions, txn]);
  };

  const handleUploadTransactions = (uploadedData) => {
    setTransactions([...transactions, ...uploadedData]);
  };

  const income = transactions
    .filter((t) => t.type === "Income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "Expense")
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div>
      {isAuthenticated ? (
        <>
          <Navbar />
          <Dashboard income={income} expenses={expenses} />
          <AddTransaction onAdd={handleAddTransaction} />
          <TransactionList transactions={transactions} />
          <FinanceChart transactions={transactions} />
          <CSVUploader onUpload={handleUploadTransactions} />
          <Reminder />
          <FinancialGoal />
        </>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <Login onLogin={() => setIsAuthenticated(true)} />
        </div>
      )}
    </div>
  );
};

export default App;
