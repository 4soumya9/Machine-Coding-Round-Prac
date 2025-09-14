movie-app/
┣ src/
┃ ┣ app/
┃ ┃ ┗ store.js
┃ ┣ features/
┃ ┃ ┗ moviesSlice.js
┃ ┣ pages/
┃ ┃ ┣ Home.jsx
┃ ┃ ┗ History.jsx
┃ ┣ components/
┃ ┃ ┗ MovieCard.jsx
┃ ┣ App.jsx
┃ ┗ main.jsx

--add movie search page and use Debounce
-- add fav
-- add local storage-- done

Ques: What is useParams?

useParams is a React Router hook that lets you access URL parameters in your component.

It’s useful when you have dynamic routes (like /movie/:id or /user/:username).

You can grab that id using useParams:
Here, :id is a route parameter.
