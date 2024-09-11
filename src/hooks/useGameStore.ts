import { resetSquares, setCurrentSquares } from "../store/game/gameSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks"

export const useGameStore = () => {
  
  const {score, currentTurn, currentSquares} = useAppSelector(state => state.game)

  const dispatch = useAppDispatch();

  const handleClickSquare = (number: number) => {
    if(currentSquares[number - 1] === null){
      dispatch(setCurrentSquares(number - 1));
    }
    return;
  } 

  const handleResetSquares = () =>{
    dispatch(resetSquares());
  }

  return {
    score,
    currentTurn,
    currentSquares,

    // functions
    handleClickSquare,
    handleResetSquares
  }
}
