import "./App.css";
import Header from "./components/Header";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
function App() {
  return (
    <div>
      <h1>hii</h1>
    </div>
  );
}

export default App;
