import { Header, Score, Square } from "../components"

export const GamePage = () => {
  return (
    <>
      <Header/>
      <div className="game-container">
        <Score/>
        <div className="game">
          <div className="row-square">
            <Square/>
            <Square/>
            <Square/>
          </div>
          <div className="row-square">
            <Square/>
            <Square/>
            <Square/>
          </div>
          <div className="row-square">
            <Square/>
            <Square/>
            <Square/>
          </div>
        </div>
        <div className="button__group">
          <button className="button">RESTART</button>
        </div>
      </div>
    </>
  )
}