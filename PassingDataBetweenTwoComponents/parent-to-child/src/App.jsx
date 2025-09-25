import "./App.css";
import ParentComponent from "./Components/ParentComponent";

function App() {
  return (
    <div>
      {/* 1. Passing Data from Parent to Child (Props) */}
      <ParentComponent />
    </div>
  );
}

export default App;

/*✅ Explanation:

ParentComponent passes message as a prop called msg to ChildComponent.

Child receives it via { msg } and displays it.*/
