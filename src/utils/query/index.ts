import { QueryClient,  } from "@tanstack/react-query";
import { GenreList } from "@utils/store/slices/genreSlice";
import type { TMDBMovieDetailReturnType, TMDBMovieImageQueryReturn, TMDBMovieListObject, TMDBMoviesQueryReturn, YTSMovieDetailsReturnType } from "@utils/query/types"

export const queryClient = new QueryClient
export type { TMDBMoviesQueryReturn, TMDBMovieListObject }

const url = process.env.NEXT_PUBLIC_MOVIES_URL
const ytsURL = process.env.NEXT_PUBLIC_YTS_MOVIES_URL
const apiKey = process.env.NEXT_PUBLIC_API_KEY


// Fetches and returns a list of movies from TMDB in json format.
export async function fetchMovies(path: string, page=1): Promise<TMDBMoviesQueryReturn> {
  const authUrl = `${url}/${path}?api_key=${apiKey}&adult=false&page=${page}`
  return fetch(authUrl).then(response => response.json())
}

/**
* Fetches and returns the details of a movie from TMDB in json format
* @param id {string} - the TMDB `id` of the target movie
* @param images {boolean} - should the images alone be fetched or not
* @returns The movie data in json format
*/
export async function fetchTMDBMovie(id: string): Promise<TMDBMovieDetailReturnType> {
  const authUrl = `${url}/movie/${id}?api_key=${apiKey}`
  return fetch(authUrl).then(response => response.json())
}

export async function fetchTMDBMovieImages(id: string): Promise<TMDBMovieImageQueryReturn> {
  const authUrl = `${url}/movie/${id}/images?api_key=${apiKey}`
  return fetch(authUrl).then(response => response.json())
}

export async function fetchGenres(): Promise<GenreList> {
  const target = 'genre/movie/list'
  const authUrl = `${url}/${target}?api_key=${apiKey}&adult=false`
  return fetch(authUrl).then(response => response.json())
}

/**
* Fetches and returns the details of a movie from YTS in json format
* @param imdbId {string} - the imdbId of the target movie
* @returns The movie data in json format
*/
export async function fetchYTSMovie(imdbId: string): Promise<YTSMovieDetailsReturnType> {
  const movieUrl = `${ytsURL}?imdb_id=${imdbId}&with_images=true&with_cast=true`
  return fetch(movieUrl).then(response => response.json())
}
