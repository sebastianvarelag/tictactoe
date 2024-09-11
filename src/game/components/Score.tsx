import { useGameStore } from "../../hooks"

export const Score = () => {

  const {score, currentTurn} = useGameStore()

  return (
    <>
    <div className="turn__container">
      <ul className="turn__list">
        <li className={`turn__item${currentTurn ? ' active' : ''}`}>X</li>
        <li className="turn__item">
          <span className="turn__score">{score[0]}</span>
          <span className="turn__score">-</span>
          <span className="turn__score">{score[1]}</span>
        </li>
        <li className={`turn__item${!currentTurn ? ' active' : ''}`}>O</li>
      </ul>
    </div>
    </>
  )
}