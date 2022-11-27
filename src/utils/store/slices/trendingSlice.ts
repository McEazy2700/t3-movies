import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoviesQueryReturn } from "@utils/query";
import { RootState } from "..";


const trendingSlice = createSlice({
  name: 'trending',
  initialState: {} as MoviesQueryReturn,
  reducers: {
    setTrending: (state, action: PayloadAction<MoviesQueryReturn>) => {
      const newState = Object.assign(state, action.payload) 
      return newState
    }
  }
})

export const { setTrending } = trendingSlice.actions
export default trendingSlice.reducer

export const selectTrending = (state: RootState) => state.trending
