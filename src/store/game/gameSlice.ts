import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface gameState {
  winner: string | null;
  currentTurn: boolean;
  score: [number, number];
  currentSquares: Array<string>
}

const initialState: gameState = { 
  winner: null,
  currentTurn: true,
  score: [0, 0],
  currentSquares: Array(9).fill(null)
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setCurrentSquares(state, action: PayloadAction<number>) {
      const index = action.payload;
      if(state.currentTurn){
        state.currentSquares[index] = 'X'
        state.currentTurn = false; 
      }
      else{
        state.currentSquares[index] = 'O'
        state.currentTurn = true;
      }
    },
    setWinner(state, action: PayloadAction<string | null>) {
      state.winner = action.payload;
      if(action.payload == 'X'){
        state.score[0]++;
      }else if(action.payload == 'O'){
        state.score[1]++;
      }
    },
    resetSquares(state){
      state.winner = null;
      state.currentTurn = true;
      state.currentSquares = Array(9).fill(null);
    }
  },
})

export default gameSlice
export const { setCurrentSquares, setWinner, resetSquares } = gameSlice.actions