import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

interface gameState {
  winner: string | null;
  currentTurn: boolean;
  score: [number, number];
  currentSquares: Array<number>
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
    // incrementByAmount(state, action: PayloadAction<number>) {
    //   state.value += action.payload
    // },
  },
})

export default gameSlice
// export const { } = gameSlice.actions