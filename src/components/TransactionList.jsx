import { useState } from "react";

const transactions = [
  { id: 1, date: "2024-02-20", category: "Food", amount: 100 },
  { id: 2, date: "2024-02-21", category: "Transport", amount: 50 },
  { id: 3, date: "2024-02-22", category: "Shopping", amount: 200 },
];

const TransactionList = () => {
  const [search, setSearch] = useState("");

  const filteredTransactions = transactions.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by category"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded"
      />
      <ul>
        {filteredTransactions.map((t) => (
          <li key={t.id}>
            {t.date} - {t.category}: ₹{t.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
