import React from "react";
import Card from "./Card";
import PatientTable from "./PatientTable";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="cards">
        <Card title="Patients" value="1200" />
        <Card title="Appointments" value="350" />
        <Card title="Doctor" value="85" />
      </div>
      <PatientTable />
    </div>
  );
};

export default Dashboard;
