import React, { useState } from "react";
import { SunIcon } from "@heroicons/react/24/outline";
import CSVUploader from "./CSVUploader";

const AddTransaction = ({ onAdd, onUpload }) => {
	console.log("pehla check");
	const [name, setName] = useState("");
	const [amount, setAmount] = useState("");
	const [type, setType] = useState("Income");
	const [isSpinning, setIsSpinning] = useState(false);
	const [method, setMethod] = useState(1);

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			setIsSpinning(true);

			onAdd({ name, amount: parseFloat(amount), type });
			setName("");
			setAmount("");
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
				<form onSubmit={handleSubmit} >
					<input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="p-3 border rounded w-full mt-6 focus:outline-none" />
					<input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="p-3 border rounded w-full mt-2 focus:outline-none" />
					<select value={type} onChange={(e) => setType(e.target.value)} className="p-2 border rounded w-full mt-2">
						<option>Income</option>
						<option>Expense</option>
					</select>
					<button type="submit" className="mt-4 p-2 bg-blue-500 flex justify-center items-center text-white rounded w-full">
						{isSpinning ? <SunIcon className="animate-spin" height={24} color={"#fff"} /> : "Add"}
					</button>
				</form>
			) : (
				<CSVUploader onUpload={onUpload} />
			)}

			<h2 className="text-sm font-semibold text-center text-indigo-900 cursor-pointer mt-6" onClick={() => setMethod((s) => !s)}>
				{method ? "Upload File" : "Add Manually"}
			</h2>
		</div>
	);
};

export default AddTransaction;
