import { useGameStore } from "../../hooks"
import { Header, Score, Square } from "../components"

export const GamePage = () => {

  const { currentSquares, currentTurn, handleClickSquare, handleResetSquares } = useGameStore();

  return (
    <>
      <Header/>
      <div className="game-container">
        <Score/>
        <div className="game">
          <div className="row-square">
            <Square value={currentSquares[0]} currentTurn={currentTurn} handleClick={() => handleClickSquare(1)}/>
            <Square value={currentSquares[1]} currentTurn={currentTurn} handleClick={() => handleClickSquare(2)}/>
            <Square value={currentSquares[2]} currentTurn={currentTurn} handleClick={() => handleClickSquare(3)}/>
          </div>
          <div className="row-square">
            <Square value={currentSquares[3]} currentTurn={currentTurn} handleClick={() => handleClickSquare(4)}/>
            <Square value={currentSquares[4]} currentTurn={currentTurn} handleClick={() => handleClickSquare(5)}/>
            <Square value={currentSquares[5]} currentTurn={currentTurn} handleClick={() => handleClickSquare(6)}/>
          </div>
          <div className="row-square">
            <Square value={currentSquares[6]} currentTurn={currentTurn} handleClick={() => handleClickSquare(7)}/>
            <Square value={currentSquares[7]} currentTurn={currentTurn} handleClick={() => handleClickSquare(8)}/>
            <Square value={currentSquares[8]} currentTurn={currentTurn} handleClick={() => handleClickSquare(9)}/>
          </div>
        </div>
        <div className="button__group">
          <button className="button" onClick={handleResetSquares}>RESTART</button>
        </div>
      </div>
    </>
  )
}