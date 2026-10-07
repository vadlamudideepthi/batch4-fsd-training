import React from "react";

function EmployeeList({ employees, deleteEmployee, editEmployee }) {
  return (
    <div className="list-container">
      <h2>Employee List</h2>

      {employees.length === 0 ? (
        <p>No employees available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Department</th>
              <th>Position</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.department}</td>
                <td>{employee.position}</td>

                <td>
                  <button
                    className="edit-btn"
                    onClick={() => editEmployee(employee)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteEmployee(employee.id)}
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

export default EmployeeList;