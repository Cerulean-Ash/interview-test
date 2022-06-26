import React, { useState } from "react";
import Board from "../Board";
import PlayerForm from "../PlayerForm/PlayerForm";
import LeagueTable from "../LeagueTable/LeagueTable";

/**
 * A game of tic-tac-toe.
 */
const Game = () => {
  const [gameHistory, setGameHistory] = useState([
    { squares: Array(9).fill(null) },
  ]); // Start of game
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const [playerName, setPlayerName] = useState({
    player1: "Player X",
    player2: "Player O",
  });
  const [winGameHistory, setWinGameHistory] = useState([]);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return { square: squares[a], line: lines[i] };
      }
    }

    return { square: null, line: [] };
  };

  const handleClick = (i) => {
    const history = gameHistory.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares).square || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? "X" : "O";
    console.log(squares);

    setGameHistory([...history, { squares }]);
    setStepNumber(history.length);
    setXisNext(!xIsNext);

    if (calculateWinner(squares).square) {
      setWinGameHistory([...winGameHistory, calculateWinner(squares).square]);
    }
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const current = gameHistory[stepNumber];
  const winner = calculateWinner(current.squares).square;

  const moves = gameHistory.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const handlePlayerNameChange = (value, player_num) => {
    let player = `player${player_num}`;
    setPlayerName({ ...playerName, [player]: value });
  };

  return (
    <div className="game">
      <PlayerForm
        symbol="X"
        onChange={(value) => handlePlayerNameChange(value, 1)}
      />
      <PlayerForm
        symbol="O"
        onChange={(value) => handlePlayerNameChange(value, 2)}
      />
      <div className="game-board">
        <Board
          squares={current.squares}
          winningLine={calculateWinner(current.squares.slice()).line}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
      <div className="winner-game">
        <LeagueTable winGameHistory={winGameHistory} playerName={playerName} />
      </div>
    </div>
  );
};

export default Game;
