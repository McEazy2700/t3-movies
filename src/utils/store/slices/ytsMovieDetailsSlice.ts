import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { YTSMovieDetailsReturnType } from "@utils/query/types";
import type { RootState } from "@utils/store";


const ytsSlice = createSlice({
  name: 'ytsMovie',
  initialState: {} as YTSMovieDetailsReturnType,
  reducers: {
    setYTSMovie: (state, action: PayloadAction<YTSMovieDetailsReturnType>) => {
      const newState = Object.assign(state, action.payload)
      return newState
    }
  }
})

export const { setYTSMovie } = ytsSlice.actions
export default ytsSlice.reducer

export const selectYtsMovie = (state: RootState) => state.ytsMovie
