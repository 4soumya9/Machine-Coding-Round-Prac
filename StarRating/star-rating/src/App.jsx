import { useState } from "react";
import "./App.css";
import StarRating from "./components/StarRating";

function App() {
  const [userRating, setUserRating] = useState(0);

  return (
    <div>
      <StarRating totalStars={3} onRate={(value) => setUserRating(value)} />
      {userRating > 0 && <p>{userRating}</p>}
    </div>
  );
}

export default App;
