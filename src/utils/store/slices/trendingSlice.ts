import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TMDBMoviesQueryReturn } from "@utils/query";
import type { RootState } from "@utils/store";


const trendingSlice = createSlice({
  name: 'trending',
  initialState: {} as TMDBMoviesQueryReturn,
  reducers: {
    setTrending: (state, action: PayloadAction<TMDBMoviesQueryReturn>) => {
      const newState = Object.assign(state, action.payload) 
      return newState
    }
  }
})

export const { setTrending } = trendingSlice.actions
export default trendingSlice.reducer

export const selectTrending = (state: RootState) => state.trending
