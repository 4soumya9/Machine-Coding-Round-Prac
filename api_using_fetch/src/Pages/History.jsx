import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAll, removeHistory } from "../utils/historySlice";

const History = () => {
  const { movieItems } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Watch History</h2>
      {movieItems?.length === 0 ? (
        <p>No movies</p>
      ) : (
        <>
          <button onClick={() => dispatch(removeAll())}>Clear All</button>
          {movieItems?.map((movie) => (
            <div key={movie.id}>
              <h4>{movie.title}</h4>
              <button onClick={() => dispatch(removeHistory(movie.id))}>
                Remove
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default History;
