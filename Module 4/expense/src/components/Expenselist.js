import React from "react";

function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div className="card">
      <h2>Expense List</h2>

      {expenses.length === 0 ? (
        <p className="empty">No expenses added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Expense</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {expenses.map((expense, index) => (
              <tr key={expense.id}>
                <td>{index + 1}</td>
                <td>{expense.title}</td>
                <td>₹{expense.amount}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteExpense(expense.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ExpenseList;