import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import genreReducer from '@utils/store/slices/genreSlice'
import moviesReducer from '@utils/store/slices/moviesSlice'
import trendingReducer from '@utils/store/slices/trendingSlice'
import tmdbMovieReducer from '@utils/store/slices/tmdbMovieDetailSlice'
import ytsMovieReducer from "@utils/store/slices/ytsMovieDetailsSlice";
import tmdbMovieImagesReducer from "@utils/store/slices/tmdbMovieImagesSlice"


const store = configureStore({
  reducer: {
    genre: genreReducer,
    movies: moviesReducer,
    trending: trendingReducer,
    tmdbMovie: tmdbMovieReducer,
    ytsMovie: ytsMovieReducer,
    tmdbMovieImages: tmdbMovieImagesReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store
