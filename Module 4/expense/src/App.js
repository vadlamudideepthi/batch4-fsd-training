import React, { useState } from "react";
import AddExpense from "./components/Addexpense";
import ExpenseList from "./components/Expenselist";
import Summary from "./components/Summary";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      expense
    ]);
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  return (
    <div className="app">
      <h1>Expense Tracker</h1>

      <Summary expenses={expenses} />

      <AddExpense addExpense={addExpense} />

      <ExpenseList
        expenses={expenses}
        deleteExpense={deleteExpense}
      />
    </div>
  );
}

export default App;