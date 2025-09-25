import { useState } from "react";
import "./Tictactoe.css";

const Tictactoe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  //Function to handle a square click
  const handleSquareClick = (index) => {
    //if square is already filled or game is over , do nothing
    if (board[index] || gameOver) {
      return;
    }

    //create new board array with updated square
    const newBoard = [...board];
    newBoard[index] = currentPlayer;

    //update the board
    setBoard(newBoard);

    //check if there`s a winner
    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      setGameOver(true);
      return;
    }

    // Check if its a draw
    if (newBoard.every((square) => square !== null)) {
      setGameOver(true);
      return;
    }

    //switch to next player
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  //Function to check for winner
  const checkWinner = (board) => {
    //All possible winning combination

    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], //Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], //Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    //check each winning combination
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null; // No winner yet
  };

  //function to reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setGameOver(false);
    setWinner(null);
  };

  //Function to render a single square
  const Square = ({ value, onClick }) => {
    return (
      <button
        className="square" // Just the base class - no conditions!
        onClick={onClick}
      >
        {value}
      </button>
    );
  };

  // Render game status message

  const getStatusMessage = () => {
    if (winner) {
      return `Winner: ${winner}!`;
    } else if (gameOver) {
      return "Game Over - It`s a draw!";
    } else {
      return `Current Player : ${currentPlayer}`;
    }
  };

  return (
    <div className="app-container">
      <h1 className="game-title"> Tic Tac Toe</h1>

      <div className="status-message">{getStatusMessage()}</div>

      {/* Game Board  */}
      <div className="game-board">
        {board.map((square, index) => (
          <Square
            key={index}
            value={square}
            onClick={() => handleSquareClick(index)}
          />
        ))}
      </div>

      {/* Restart Button  */}
      <button className="restart-button" onClick={resetGame}>
        {" "}
        Restart Game{" "}
      </button>

      {/* Game Instruction  */}
      <div className="instructions">
        <h3>How to Play:</h3>
        <p>• Players take turns placing X and O on the 3x3 grid</p>
        <p>
          • First player to get 3 in a row (horizontal, vertical, or diagonal)
          wins!
        </p>
        <p>• Click "Restart Game" to play again</p>
      </div>
    </div>
  );
};

export default Tictactoe;
