import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface gameState {
  modalOpen: boolean;
  winner: string | null;
  currentTurn: boolean;
  score: [number, number];
  currentSquares: Array<string>;
  loading: boolean;
}

const initialState: gameState = { 
  modalOpen: false,
  winner: null,
  currentTurn: true,
  score: [0, 0],
  currentSquares: Array(9).fill(null),
  loading: false
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
      if(state.winner !== null){
        state.modalOpen = true;
        state.loading = true;
      }
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
      state.loading = false
    },
    closeModal(state){
      state.modalOpen = false;
    }
  },
})

export default gameSlice
export const { setCurrentSquares, setWinner, resetSquares, closeModal } = gameSlice.actions