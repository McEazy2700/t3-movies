import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoviesQueryReturn } from "@utils/query";
import { RootState } from "..";


const movieSlice = createSlice({
  name: 'movies',
  initialState: {} as MoviesQueryReturn,
  reducers: {
    setMovies: (state, action: PayloadAction<MoviesQueryReturn>) => {
      const newState = Object.assign(state, action.payload)
      return newState
    },
    appendMovies: (state, action: PayloadAction<MoviesQueryReturn>) => {
      const updatedResults = [...state.results, ...action.payload.results]
      const newMovies = {} as MoviesQueryReturn
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
