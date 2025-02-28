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
		<div className="min-h-screen bg-gray-100 flex justify-center items-center">
			<Dashboard />
		</div>
	);


export default App;
