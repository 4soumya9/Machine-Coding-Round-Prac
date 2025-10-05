import React from "react";

const PatientTable = () => {
  const patients = [
    { id: 1, name: "John Doe", age: 29, condition: "Flu" },
    { id: 2, name: "Jane Smith", age: 34, condition: "Diabetes" },
    { id: 3, name: "Sam Wilson", age: 45, condition: "Hypertension" },
    { id: 4, name: "Lisa Ray", age: 25, condition: "Asthma" },
  ];
  return (
    <div className="table-container">
      <h3>Recent Patient</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Condition</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.condition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;
