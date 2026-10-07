import React, { useState } from "react";

import AddEmployee from "./components/Addemployee";
import EmployeeList from "./components/Employeelist";
import EmployeeProfileUpdate from "./components/Employeeprofileupdate";
import EmployeeSearch from "./components/Employeesearch";

import "./App.css";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: "101",
      name: "Rahul",
      email: "rahul@gmail.com",
      phone: "9876543210",
      department: "IT",
      position: "Developer"
    },
    {
      id: "102",
      name: "Priya",
      email: "priya@gmail.com",
      phone: "9876501234",
      department: "HR",
      position: "HR Manager"
    }
  ]);

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (confirmDelete) {
      setEmployees(
        employees.filter((employee) => employee.id !== id)
      );
    }
  };

  const editEmployee = (employee) => {
    setSelectedEmployee(employee);
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === updatedEmployee.id
          ? updatedEmployee
          : employee
      )
    );

    setSelectedEmployee(null);
  };

  const cancelEdit = () => {
    setSelectedEmployee(null);
  };

  return (
    <div className="app">
      <header>
        <h1>Employee Management System</h1>
        <p>React JS Employee Management Application</p>
      </header>

      <AddEmployee addEmployee={addEmployee} />

      <EmployeeSearch employees={employees} />

      <EmployeeList
        employees={employees}
        deleteEmployee={deleteEmployee}
        editEmployee={editEmployee}
      />

      {selectedEmployee && (
        <EmployeeProfileUpdate
          selectedEmployee={selectedEmployee}
          updateEmployee={updateEmployee}
          cancelEdit={cancelEdit}
        />
      )}
    </div>
  );
}

export default App;
