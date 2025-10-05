import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h4>Hii is a Product</h4>
      <Link to="/products/car">Cars</Link>
      <Link to="/products/bike">Bikes</Link>
      <Outlet />
    </div>
  );
};

export default Products;
