import React, { useState, useEffect } from "react";

function EmployeeProfileUpdate({ selectedEmployee, updateEmployee, cancelEdit }) {
  const [employee, setEmployee] = useState(selectedEmployee);

  useEffect(() => {
    setEmployee(selectedEmployee);
  }, [selectedEmployee]);

  if (!selectedEmployee) {
    return null;
  }

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateEmployee(employee);
    alert("Employee updated successfully!");
  };

  return (
    <div className="form-container">
      <h2>Update Employee Profile</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          value={employee.id}
          disabled
        />

        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={employee.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={employee.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={employee.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={employee.department}
          onChange={handleChange}
        />

        <input
          type="text"
          name="position"
          placeholder="Position"
          value={employee.position}
          onChange={handleChange}
        />

        <button type="submit">Update Employee</button>

        <button
          type="button"
          className="cancel-btn"
          onClick={cancelEdit}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EmployeeProfileUpdate;