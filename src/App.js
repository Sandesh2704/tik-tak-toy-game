import './App.css';
import Board from './component/Board';
import { useState, useEffect } from 'react';
import ScoreBoard from './component/ScoreBoard';
import ResetBotton from './component/ResetBotton';




function App() {

  const WIN_Condition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  const [board, setBoard] = useState(Array(9).fill(null))
  const [xPlaying, setXPlaying] = useState(true)
  const [score, setScore] = useState({ xScore: 0, oScore: 0 })
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem('score'));
    if (storedScores) {
      setScore(storedScores);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('score', JSON.stringify(score));
  }, [score]);

  const handleBoxClick = (boxIndex) => {
    const updateBoard = board.map((value, index) => {
      if (index === boxIndex) {
        return xPlaying === true ? 'X' : 'O'
      } else {
        return value
      }
    })

    const winner = CheckWinner(updateBoard)

    if (winner) {
      if (winner === 'O') {
        let { oScore } = score
        oScore += 1
        setScore({ ...score, oScore })
      } else {
        let { xScore } = score
        xScore += 1
        setScore({ ...score, xScore })
      }
    }

    console.log('its your score', score)
    setBoard(updateBoard)
    setXPlaying(!xPlaying)
  }

  const CheckWinner = (board) => {
    for (let i = 0; i < WIN_Condition.length; i++) {
      const [x, y, z] = WIN_Condition[i]
      if (board[x]
        && board[x] === board[y]
        && board[y] === board[z]) {
          setGameOver(true)
        return board[x]
      }
    }
  }

  const resetBoard = () => {
    setGameOver(false)
    setBoard(Array(9).fill(null))
  }




  return (
    <div className="App">
      <ScoreBoard score={score} xPlaying={xPlaying}/>
      <Board board={board} onClick={gameOver? resetBoard : handleBoxClick} />
      <ResetBotton resetBoard={resetBoard}/>
    </div>
  );
}

export default App;
