import React, { useState } from "react";
import { SunIcon } from "@heroicons/react/24/outline";
import CSVUploader from "./CSVUploader";

function capitalizeFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

const AddTransaction = ({ setTransactions, setAddTransactionDialogBox }) => {
	const [name, setName] = useState("");
	const [amount, setAmount] = useState("");
	const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
	const [type, setType] = useState("expense");
	const [isSpinning, setIsSpinning] = useState(false);
	const [method, setMethod] = useState(1);

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			setIsSpinning(true);
			setTransactions(trans => [...trans, { id: Math.round(Math.random() * 100), date, name, type, amount}]);
            setAddTransactionDialogBox(0);
		} catch (e) {
			console.error(e.message);
		} finally {
			setIsSpinning(false);
		}
	};

	return (
		<div className="p-6">
			<h2 className="text-xl sm:text-2xl font-bold text-center">Add Transaction</h2>
			{method ? (
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="p-3 border rounded w-full mt-6 focus:outline-none" />
					<input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} className="p-3 border rounded w-full mt-2 focus:outline-none" />
					<input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} className="p-3 border rounded w-full mt-2 focus:outline-none" />
					<select value={capitalizeFirstLetter(type)} onChange={(e) => setType(e.target.value.toLowerCase())} className="p-2 border rounded w-full mt-2">
						<option>Income</option>
						<option>Expense</option>
						<option>Savings</option>
					</select>
					<button type="submit" className="mt-4 p-2 bg-blue-500 flex justify-center items-center text-white rounded w-full">
						{isSpinning ? <SunIcon className="animate-spin" height={24} color={"#fff"} /> : "Add"}
					</button>
				</form>
			) : (
				<CSVUploader onUpload={console.log} />
			)}

			<h2 className="text-sm font-semibold text-center text-indigo-900 cursor-pointer mt-6" onClick={() => setMethod((s) => !s)}>
				{method ? "Upload File" : "Add Manually"}
			</h2>
		</div>
	);
};

export default AddTransaction;
