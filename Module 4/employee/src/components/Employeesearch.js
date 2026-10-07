import React, { useState } from "react";

function EmployeeSearch({ employees }) {
  const [search, setSearch] = useState("");

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase()) ||
    employee.id.toLowerCase().includes(search.toLowerCase()) ||
    employee.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="search-container">
      <h2>Search Employees</h2>

      <input
        type="text"
        placeholder="Search by name, ID or department"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search && (
        <div>
          {filteredEmployees.length === 0 ? (
            <p>No employee found.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Position</th>
                </tr>
              </thead>

              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.department}</td>
                    <td>{employee.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}

export default EmployeeSearch;