import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h3>This is abpout</h3>
      <Outlet />
    </div>
  );
};

export default About;
