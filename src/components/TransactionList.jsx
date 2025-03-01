import { useState } from "react";
import Dialog from "./Dialog";
import EditTransaction from "./EditTransaction";

const TransactionList = ({ transactions, setTransactions }) => {
	const [search, setSearch] = useState("");
	const [editTransactionDialogBox, setEditTransactionDialogBox] = useState(0);
	const filteredTransactions = transactions.filter((t) => t.name.toLowerCase().includes(search.toLowerCase()));

	const DownloadCSV = () => {
		const headers = Object.keys(transactions[0]).join(",") + "\n";
		const rows = transactions.map((obj) => Object.values(obj).join(",")).join("\n");

		const csvContent = headers + rows;
		const blob = new Blob([csvContent], { type: "text/csv" });
		const url = URL.createObjectURL(blob);

		const a = document.createElement("a");
		a.href = url;
		a.download = "data.csv";
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	};

	return (
		<div className="relative w-full p-6 overflow-x-scroll">
			<div className="flex flex-col sm:flex-row justify-between items-center mb-4">
				<h1 className="text-xl sm:text-2xl font-bold ">Transaction List</h1>
				<div className="flex justify-between sm:justify-end items-center gap-2 w-full sm:w-1/2 mt-4 sm:mt-0">
					<input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} className="bg-transparent border px-2 p-1 rounded focus:outline-none text-xs sm:text-sm w-20" />
					<h1 onClick={DownloadCSV} className="text-base underline underline-offset-4 cursor-pointer hover:text-gray-600 active:text-black duration-300">
						Download csv
					</h1>
				</div>
			</div>
			<table className="min-w-full divide-y-2 divide-[#ffecf4b8] bg-[#ffecf42e] pb-3 text-sm border border-red-100 border-collapse selection:bg-red-200 cursor-pointer">
				<thead className="sticky top-0 bg-[#ffecf4a6] backdrop-blur-md">
					<tr>
						{["id", "name", "date", "type", "amount"].map((value, index) => {
							return (
								<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left" key={index + value}>
									<b>{value}</b>
								</th>
							);
						})}
					</tr>
				</thead>

				<tbody className="divide-y divide-[#ffecf4b8]">
					<Dialog isOpen={editTransactionDialogBox} setIsOpen={setEditTransactionDialogBox}>
						{editTransactionDialogBox > 0 && <EditTransaction SetEditTransactionDialogBox={setEditTransactionDialogBox} setTransactions={setTransactions} transaction={transactions.filter((t) => t.id === editTransactionDialogBox)[0]} />}
					</Dialog>
					{filteredTransactions.map(({ id, date, type, amount, name }) => {
						return (
							<tr className="odd:bg-gray-50 group" key={id + "-transaction-row"}>
								<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 group-hover:bg-[#ffecf4]" key={id + "-" + "id"}>
									<b>{id}</b>
								</td>
								<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 group-hover:bg-[#ffecf4]" key={id + "-" + name}>
									<b>{name}</b>
								</td>
								<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 group-hover:bg-[#ffecf4]" key={id + "-" + date}>
									<b>{date}</b>
								</td>
								<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 group-hover:bg-[#ffecf4]" key={id + "-" + type}>
									<b>{type}</b>
								</td>
								<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 group-hover:bg-[#ffecf4]" key={id + "-" + amount}>
									<b>{amount}</b>
								</td>
								<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 group-hover:bg-[#ffecf4]" key={id + "-" + "edit-button"}>
									<button onClick={() => setEditTransactionDialogBox(id)} className="p-1 px-2 rounded-md bg-red-200 hover:bg-red-300 active:bg-red-200 duration-300 shadow-md">
										edit
									</button>
								</td>
								<td onClick={() => setTransactions((trans) => trans.filter((t) => t.id !== id))} className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 group-hover:bg-[#ffecf4]" key={id + "-" + "delete-button"}>
									<button className="p-1 px-2 rounded-md bg-red-200 hover:bg-red-300 active:bg-red-200 duration-300 shadow-md">delete</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default TransactionList;
