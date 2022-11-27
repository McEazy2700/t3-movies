import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface Genre {
  name: string
  id: number
}

export interface GenreList {
  genres: [Genre]
}
const genreSlice = createSlice({
  name: 'genre',
  initialState: {} as GenreList,
  reducers: {
    setGenre: (state, action:PayloadAction<{ result: GenreList }>) => {
      const { payload } = action
      const newState = Object.assign(state, payload.result)
      return newState
    }
  }
})

export const { setGenre } = genreSlice.actions
export default genreSlice.reducer

export const selectGenres = (state: RootState) => state.genre
