import React from "react";

function Summary({ expenses }) {
  const total = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div className="summary">
      <div className="summary-box">
        <h3>Total Expenses</h3>
        <p>₹{total}</p>
      </div>

      <div className="summary-box">
        <h3>Number of Expenses</h3>
        <p>{expenses.length}</p>
      </div>
    </div>
  );
}

export default Summary;