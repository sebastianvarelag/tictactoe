import { useGameStore } from "../hooks";

export const Modal = () => {
  
  const {winner, modalOpen, handleCloseModal} = useGameStore()

  return (
    <>
      {
        winner && (
        <div className={`modal__container${modalOpen ? ' modal-open' : ' modal-close'}`}>
          <div className="modal__content">
            <h2>GAME OVER</h2>
            <p>Player <span style={winner === 'X' ? {color: '#91DDCF'} : {color: '#FF8A8A'}}>{winner}</span> wins!</p>
            <button className="button__modal" onClick={handleCloseModal}>CLOSE</button>
          </div>
        </div>
        )
      }
    </>
  )
}
