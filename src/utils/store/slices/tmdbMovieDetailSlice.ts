import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { TMDBMovieDetailReturnType } from "@utils/query/types";
import type { RootState } from "@utils/store";


const tmdbMovieSlice = createSlice({
  name: 'tmdbMovie',
  initialState: {} as TMDBMovieDetailReturnType,
  reducers: {
    setMovie: (state, action: PayloadAction<TMDBMovieDetailReturnType>) => {
      const newState = Object.assign(state, action.payload)
      return newState
    }
  }
})

export const { setMovie } = tmdbMovieSlice.actions
export default tmdbMovieSlice.reducer

export const selecteTMDBMovie = (state: RootState) => state.tmdbMovie
