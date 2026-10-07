import React, { useState } from "react";

function AddExpense({ addExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "" || amount === "") {
      alert("Please enter expense name and amount");
      return;
    }

    const newExpense = {
      id: Date.now(),
      title: title,
      amount: Number(amount),
    };

    addExpense(newExpense);

    setTitle("");
    setAmount("");
  };

  return (
    <div className="card">
      <h2>Add Expense</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Expense name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default AddExpense;