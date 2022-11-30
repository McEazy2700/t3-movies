import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { TMDBMovieImageQueryReturn } from "@utils/query/types";
import type { RootState } from "@utils/store";


const tmdbImagesSlice = createSlice({
  name: 'tmdbMovieImages',
  initialState: {} as TMDBMovieImageQueryReturn,
  reducers: {
    setImages: (state, action: PayloadAction<TMDBMovieImageQueryReturn>) => {
      const newState = Object.assign(state, action.payload)
      return newState
    }
  }
})

export const { setImages } = tmdbImagesSlice.actions
export default tmdbImagesSlice.reducer

export const selectImages = (state: RootState) => state.tmdbMovieImages
