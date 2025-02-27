import React, { useState } from "react";

const AddTransaction = ({ onAdd }) => {
  console.log("pehla check");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Income");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, amount: parseFloat(amount), type });
    setName("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-xl font-bold">Add Transaction</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border rounded w-full mt-2"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="p-2 border rounded w-full mt-2"
      />
      <select value={type} onChange={(e) => setType(e.target.value)} className="p-2 border rounded w-full mt-2">
        <option>Income</option>
        <option>Expense</option>
      </select>
      <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">Add</button>
    </form>
  );
};

export default AddTransaction;
