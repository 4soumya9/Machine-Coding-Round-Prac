import { useState } from "react";

const Tictactoe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const handleSquareClick = (index) => {
    if (board[index] || gameOver) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      setGameOver(true);
      return;
    }
  };

  const checkWinner = () => {};

  const Square = () => {};

  const getStatusMessage = () => {};
  const handleReset = () => {};

  return <div className="app-container"></div>;
};

export default Tictactoe;
