1️⃣ What is useRef?

useRef is a React Hook.

It lets you create a reference to a DOM element or to store a mutable value that doesn’t cause re-renders.

Think of it like a bookmark that always points to the same element.

2️⃣ Why useRef(null)?

null is the initial value (before React assigns the ref to anything).

Later, React will replace it with the actual DOM node of the element you attach it to.

3=>dropdownRef.current → the <div class="dropdown">

event.target → the actual element you clicked

👉 .contains(event.target) checks if the clicked element is inside the dropdown.

4.onFocus={() => setIsOpen(true)}

onFocus runs when the input box gets focus (user clicks into it or tabs into it).

setIsOpen(true) opens the dropdown menu immediately when the input is active.

👉 Example:

Before clicking → dropdown closed.

Click inside input → onFocus fires → dropdown opens.

If we didn’t do this, the dropdown would only open after you type something, not when you first click inside.

5.onKeyDown={handleKeyDown}

onKeyDown runs every time the user presses a key while focused on the input.

We connect it to our function handleKeyDown which handles keyboard navigation.

6. onFocus={() => setIsOpen(true)} → Open dropdown when input gets focus.

onKeyDown={handleKeyDown} → Listen for arrow keys + enter to navigate/select.

7. Why do we write placeholder={placeholder}?

Left side → the HTML attribute (placeholder)

Right side → the variable from props (placeholder)

It’s basically telling React:
👉 “Hey input, use the value that was passed down as placeholder text.”
