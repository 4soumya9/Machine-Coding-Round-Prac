import React from "react";
import { Link, Outlet } from "react-router-dom";

const Bikes = () => {
  return (
    <div>
      <h2> this is a Bikes</h2>
      <Link to="/products/bike/high">High</Link>
      <Outlet />
    </div>
  );
};

export default Bikes;
