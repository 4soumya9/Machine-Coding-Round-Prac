import { useState } from "react";

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue((prev) => !prev);
  //   return [value, toggle];
  return { isVisible: value, toggleVisible: toggle };
}

export default useToggle;

/*We use [] because:

React hooks like useState, useReducer return arrays.

 It’s concise and keeps consistency with React conventions*/


/*
 ✅ Keep object return, but match names

useToggle.js

return { isVisible: value, toggleVisible: toggle };


ToggleExample.js

const { isVisible, toggleVisible } = useToggle(false);*/


// in the array destructing order matters , not the names 