import { useState } from "react";

const transactions = [
	{ id: 1, date: "2024-02-20", category: "Food", amount: 100 },
	{ id: 2, date: "2024-02-21", category: "Transport", amount: 50 },
	{ id: 3, date: "2024-02-22", category: "Shopping", amount: 200 },
];

const TransactionList = () => {
	const [search, setSearch] = useState("");
	const [searchListBox, setSearchListBox] = useState(false);

	const filteredTransactions = transactions.filter((t) => t.category.toLowerCase().includes(search.toLowerCase()));

	return (
		<div className="relative border">
			<input
				onFocus={() => setSearchListBox(true)}
				onBlur={() => {
					setSearchListBox(false);
					setSearch("");
				}}
				type="text"
				placeholder="Search"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className="p-2 rounded focus:outline-none text-xs sm:text-sm w-20"
			/>

			{searchListBox && (
				<ul className="absolute -translate-x-1/2 left-1/2 z-20 bg-white mt-1 rounded p-2 min-w-72 max-w-screen-md shadow-xl">
					{filteredTransactions.map((t) => (
						<li key={t.id}>
							{t.date} - {t.category}: ₹{t.amount}
						</li>
					))}
					{filteredTransactions.length === 0 && <p>not found</p>}
				</ul>
			)}
		</div>
	);
};

export default TransactionList;
