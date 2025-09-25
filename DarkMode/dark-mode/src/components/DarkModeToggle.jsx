import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../utils/themeSlice";
const DarkModeToggle = () => {
  const dispatch = useDispatch();

  const mode = useSelector((state) => state.theme.mode);

  return (
    <div>
      <button onClick={() => dispatch(toggleTheme())} className="toggle-btn">
        {mode === "light" ? "Dark Mode " : "Light Mode"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
