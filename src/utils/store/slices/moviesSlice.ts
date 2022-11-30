import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TMDBMoviesQueryReturn } from "@utils/query";
import type { RootState } from "@utils/store";


const movieSlice = createSlice({
  name: 'movies',
  initialState: {} as TMDBMoviesQueryReturn,
  reducers: {
    setMovies: (state, action: PayloadAction<TMDBMoviesQueryReturn>) => {
      const newState = Object.assign(state, action.payload)
      return newState
    },
    appendMovies: (state, action: PayloadAction<TMDBMoviesQueryReturn>) => {
      const updatedResults = [...state.results, ...action.payload.results]
      const newMovies = {} as TMDBMoviesQueryReturn
      newMovies.page = action.payload.page
      newMovies.total_pages = action.payload.total_pages
      newMovies.total_results = action.payload.total_results
      newMovies.results = updatedResults
      return newMovies
    }
  }
})

export const { setMovies, appendMovies } = movieSlice.actions
export default movieSlice.reducer

export const selectMovies = (state: RootState) => state.movies
