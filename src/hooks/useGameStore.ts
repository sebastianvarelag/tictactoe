import { closeModal, resetSquares, setCurrentSquares, setWinner } from "../store/game/gameSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks"

export const useGameStore = () => {
  
  const {winner, score, currentTurn, currentSquares, modalOpen, loading} = useAppSelector(state => state.game)

  const dispatch = useAppDispatch();

  const handleClickSquare = (number: number) => {
    if(currentSquares[number - 1] === null){
      dispatch(setCurrentSquares(number - 1));
    }
  } 
  
  const handleResetSquares = () =>{
    dispatch(resetSquares());
  }

  const determineWinner = (currentSquares: string[]) =>{
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for(let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i];

      if(currentSquares[a] && currentSquares[a] === currentSquares[b] && currentSquares[a] === currentSquares[c]){
        return dispatch(setWinner(currentSquares[a]));
      }

      if(currentSquares.every(square => square!== null)){
        return dispatch(setWinner('DRAW'));
      }
    }
    return dispatch(setWinner(null));
  }

  const handleCloseModal = () =>{
    dispatch(closeModal());
    dispatch(resetSquares());
  }

  return {
    winner,
    loading,
    score,
    currentTurn,
    currentSquares,
    modalOpen,

    // functions
    handleClickSquare,
    handleResetSquares,
    determineWinner,
    handleCloseModal
  }
}
