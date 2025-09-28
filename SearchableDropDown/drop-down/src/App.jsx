import "./App.css";
import SearchableDropDown from "./components/SearchableDropDown";
import "./components/Search.css";

function App() {
  const fruits = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Grapes",
    "Mango",
    "Orange",
  ];

  return (
    <div className="app">
      <h2>drop Down</h2>

      <SearchableDropDown options={fruits} />
    </div>
  );
}

export default App;
