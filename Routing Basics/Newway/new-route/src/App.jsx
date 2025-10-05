import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  NavLink,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Company from "./components/Company";
import Contact from "./components/Contact";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, ///layout
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
        children: [
          { path: "company", element: <Company /> },
          {
            path: "contact",
            element: <Contact />,
          },
        ],
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

function PrivateRoute({ children }) {
  const isAuthenticated = checkedUserAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function Layout() {
  return (
    <div>
      <header>Header Content</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer Content</footer>
    </div>
  );
}
function App() {
  return <RouterProvider router={router} />;
}

export default App;
