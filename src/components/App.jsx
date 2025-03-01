import React, { useState } from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import FinanceChart from "./FinanceChart";
import Login from "./Login";
import Reminder from "./Reminder";
import FinancialGoal from "./FinancialGoal";
import TransactionList from "./TransactionList";

const example_transactions = [
	// February
	{ id: 1, date: "2024-02-20", type: "expense", amount: 100, name: "Groceries" },
	{ id: 2, date: "2024-02-21", type: "expense", amount: 50, name: "Snacks" },
	{ id: 3, date: "2024-02-22", type: "expense", amount: 200, name: "Dinner" },
	{ id: 4, date: "2024-02-24", type: "income", amount: 1000, name: "Salary" },
	{ id: 5, date: "2024-02-25", type: "income", amount: 2000, name: "Freelance" },
	{ id: 6, date: "2024-02-27", type: "savings", amount: 500, name: "Emergency Fund" },

	// March
	{ id: 7, date: "2024-03-05", type: "expense", amount: 300, name: "Rent" },
	{ id: 8, date: "2024-03-10", type: "expense", amount: 150, name: "Utilities" },
	{ id: 9, date: "2024-03-15", type: "income", amount: 2500, name: "Part-time Job" },
	{ id: 10, date: "2024-03-20", type: "savings", amount: 600, name: "Investment" },
	{ id: 11, date: "2024-03-25", type: "expense", amount: 100, name: "Subscription" },
	{ id: 12, date: "2024-03-28", type: "income", amount: 1800, name: "Side Hustle" },

	// April
	{ id: 13, date: "2024-04-03", type: "income", amount: 3000, name: "Main Salary" },
	{ id: 14, date: "2024-04-08", type: "expense", amount: 400, name: "Dining Out" },
	{ id: 15, date: "2024-04-12", type: "savings", amount: 700, name: "Mutual Funds" },
	{ id: 16, date: "2024-04-16", type: "expense", amount: 120, name: "Gym Membership" },
	{ id: 17, date: "2024-04-20", type: "expense", amount: 80, name: "Streaming Services" },

	// May
	{ id: 18, date: "2024-05-02", type: "income", amount: 2800, name: "Main Salary" },
	{ id: 19, date: "2024-05-07", type: "expense", amount: 500, name: "Vacation" },
	{ id: 20, date: "2024-05-10", type: "savings", amount: 1000, name: "Fixed Deposit" },
	{ id: 21, date: "2024-05-15", type: "expense", amount: 250, name: "Car Repair" },
	{ id: 22, date: "2024-05-22", type: "income", amount: 500, name: "Freelance Writing" },
];

const App = () => {
	const [transactions, setTransactions] = useState(example_transactions);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [message, setMessage] = useState("Electricity Bill Due Tomorrow!");

	return (
		<div className="flex flex-col justify-start items-center min-h-screen w-full relative">
			{!isAuthenticated ? (
				<>
					<Navbar />
					<Dashboard transactions={transactions} setTransactions={setTransactions} />
					<Reminder message={message} setMessage={setMessage} />
					<div className="w-full p-4 sm:px-8 sm:py-4 flex flex-col gap-4 sm:flex-row justify-center items-start">
						<div className="w-full sm:w-1/2 flex flex-col justify-start items-start">
							<h1 className="text-xl sm:text-2xl font-bold  mb-4">Finance Chart</h1>
							<FinanceChart transactions={transactions} />
						</div>

						<div className="w-full sm:w-1/2 flex flex-col justify-start items-start">
							<h1 className="text-xl sm:text-2xl font-bold  mb-4">Financial Goal</h1>
							<FinancialGoal transactions={transactions} />
						</div>
					</div>
					<TransactionList transactions={transactions} setTransactions={setTransactions} />
				</>
			) : (
				<Login onLogin={() => setIsAuthenticated(true)} />
			)}
		</div>
	);
};

export default App;
