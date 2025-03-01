import React, { useState } from "react";
import { SunIcon } from "@heroicons/react/24/outline";

const EditTransaction = ({ setTransactions, transaction, SetEditTransactionDialogBox }) => {
	const [name, setName] = useState(transaction.name);
	const [amount, setAmount] = useState(transaction.amount);
	const [date, setDate] = useState(transaction.date);
	const [type, setType] = useState(transaction.type);
	const [isSpinning, setIsSpinning] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			setIsSpinning(true);
			setTransactions((trans) => trans.map((t) => (t.id === transaction.id ? { id: t.id, date, type, amount, name } : t)));
            SetEditTransactionDialogBox(0);
		} catch (e) {
			console.error(e.message);
		} finally {
			setIsSpinning(false);
		}
	};

	return (
		<div className="p-6">
			<h2 className="text-xl sm:text-2xl font-bold text-center">Edit Transaction</h2>

			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="p-3 border rounded w-full mt-6 focus:outline-none" />
				<input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} className="p-3 border rounded w-full mt-2 focus:outline-none" />
				<input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} className="p-3 border rounded w-full mt-2 focus:outline-none" />
				<select value={type} onChange={(e) => setType(e.target.value.toLowerCase())} className="p-2 border rounded w-full mt-2">
					<option>Income</option>
					<option>Expense</option>
					<option>Savings</option>
				</select>
				<div className="flex justify-center items-center gap-2">
					<button type="submit" className="mt-4 p-2 bg-blue-500 flex justify-center items-center text-white rounded w-full">
						{isSpinning ? <SunIcon className="animate-spin" height={24} color={"#fff"} /> : "Update"}
					</button>
					<button onClick={() => SetEditTransactionDialogBox(0)} type="button" className="mt-4 p-2 bg-red-500 flex justify-center items-center text-white rounded w-full">
						{isSpinning ? <SunIcon className="animate-spin" height={24} color={"#fff"} /> : "Cancel"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditTransaction;
