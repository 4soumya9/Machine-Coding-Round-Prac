import React from "react";
import { useDispatch } from "react-redux";
import { addToHistory } from "../utils/historySlice";


const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addToHistory(movie));
  };
  return (
    <div onClick={handleClick} className="cursor-pointer back">
      <h3 className="cursor-pointer">{movie.title}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
};

export default MovieCard;
