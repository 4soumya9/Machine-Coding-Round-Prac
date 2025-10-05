import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  NavLink,
} from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Cars from "./components/Cars";
import Bikes from "./components/Bikes";
import Higher from "./components/Higher";
function App() {
  return (
    <BrowserRouter>
      <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/products">Products</Link> */}
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          {/* NavLink Automatically applies active class when the link matches the current route */}
          Home
        </NavLink>
        <NavLink to="/products" className="nav">
          Products
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path="car" element={<Cars />} />
          <Route path="bike" element={<Bikes />}>
            <Route path="high" element={<Higher />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*Case 1: With <Outlet />

Go to /products → You see:

Hii is a Product
[Cars] [Bikes]


Click Cars →

Hii is a Product
[Cars] [Bikes]
This is the Car page


Click Bikes →

Hii is a Product
[Cars] [Bikes]
This is the Bike page


✅ Child route UI (Car or Bike) shows inside parent.

Case 2: Without <Outlet />
{/* <Outlet /> removed */

/*Go to /products/car → You see only:

Hii is a Product
[Cars] [Bikes]


Car page does not show anywhere. Same for Bike.

👉 Because React Router did load the Car or Bike component, but since there’s no <Outlet />, it has no place to inject them.*/
