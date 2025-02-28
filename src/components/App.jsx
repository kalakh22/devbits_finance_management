import React, { useState } from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import FinanceChart from "./FinanceChart";
import Login from "./Login";
import Reminder from "./Reminder";
import FinancialGoal from "./FinancialGoal";

console.log("kaam ho raha hai");

const App = () => {
	const [transactions, setTransactions] = useState([]);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [message, setMessage] = useState("Electricity Bill Due Tomorrow!");

	const handleAddTransaction = (txn) => {
		setTransactions([...transactions, txn]);
	};

	const handleUploadTransactions = (uploadedData) => {
		setTransactions([...transactions, ...uploadedData]);
	};

	const income = transactions.filter((t) => t.type === "Income").reduce((acc, t) => acc + t.amount, 0);
	const expenses = transactions.filter((t) => t.type === "Expense").reduce((acc, t) => acc + t.amount, 0);

	return (
		<div className="flex flex-col justify-start items-center min-h-screen w-full relative">
			{!isAuthenticated ? (
				<>
					<Navbar />
					<Dashboard income={income} expenses={expenses} handleAddTransaction={handleAddTransaction} transactions={transactions} onUpload={handleUploadTransactions} />
					<Reminder message={message} setMessage={setMessage} />
					<div className="w-full p-4 sm:px-8 sm:py-4 flex flex-col gap-4 sm:flex-row justify-center items-start">
						<div className="w-full sm:w-1/2 flex flex-col justify-start items-start">
							<h1 className="text-xl sm:text-2xl font-bold  mb-4">Finance Chart</h1>
							<FinanceChart transactions={transactions} />
						</div>

						<div className="w-full sm:w-1/2 flex flex-col justify-start items-start">
							<h1 className="text-xl sm:text-2xl font-bold  mb-4">Financial Goal</h1>
							<FinancialGoal />
						</div>
					</div>
				</>
			) : (
				<Login onLogin={() => setIsAuthenticated(true)} />
			)}
		</div>
	);
};

export default App;
