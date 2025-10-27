import { useState } from "react";
import "./Prac.css";
const TicTac = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [gameover, setGameover] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const checkWinner = (board) => {
    const winningCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [6, 4, 2],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    for (let combo of winningCombination) {
      let [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || gameover) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      setGameover(true);
      return;
    }

    if (newBoard.every((square) => square !== null)) {
      setGameover(true);
      return;
    }
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const Square = ({ OnClickNot, value }) => {
    return <button onClick={OnClickNot}>{value}</button>;
  };

  const setStatusMsg = () => {
    if (winner) {
      // return `{winner}`;
      return ` Winner :${winner}`;
    } else if (gameover) {
      return "Game over";
    } else {
      return `CurrentPlayer: ${currentPlayer}`;
    }
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setGameover(false);
    setWinner(null);
  };
  return (
    <div className="status-message ">
      {setStatusMsg()}
      <div className="game-board">
        {board.map((square, index) => (
          <Square
            OnClickNot={() => handleClick(index)}
            value={square}
            key={index}
          />
        ))}
      </div>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
export default TicTac;
