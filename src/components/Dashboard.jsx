import React, { useState } from "react";
import Dialog from "./Dialog";
import AddTransaction from "./AddTransaction";
import TransactionList from "./TransactionList";

const Dashboard = ({ income, expenses, savings, handleAddTransaction, transactions, onUpload }) => {
	const [addTransactionDialogBox, setAddTransactionDialogBox] = useState(false);

	return (
		<div className="p-4 sm:p-8 w-full self-start">
			<Dialog isOpen={addTransactionDialogBox} setIsOpen={setAddTransactionDialogBox}>
				<AddTransaction onAdd={handleAddTransaction} onUpload={onUpload} />
			</Dialog>

			<div className="w-full flex justify-between items-center">
				<h2 className="text-2xl sm:text-3xl font-bold">Dashboard</h2>
				<div className="flex justify-center items-center gap-2">
					<TransactionList transactions={transactions} />
					<button onClick={() => setAddTransactionDialogBox(true)} className="p-2 bg-blue-500 flex justify-center items-center text-xs sm:text-sm text-white rounded hover:shadow-lg duration-300 active:shadow-none">
						Add Transaction
					</button>
				</div>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 sm:mt-8">
				<div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
					<h3>Total Income</h3>
					<p>₹{income}</p>
				</div>
				<div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
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
