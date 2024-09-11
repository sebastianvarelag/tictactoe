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
    resetSquares(state){
      state.winner = null;
      state.currentTurn = true;
      state.currentSquares = Array(9).fill(null);
    }
  },
})

export default gameSlice
export const { setCurrentSquares, resetSquares } = gameSlice.actions