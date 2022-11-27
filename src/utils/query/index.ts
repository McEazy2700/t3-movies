import { QueryClient,  } from "@tanstack/react-query";
import { GenreList } from "@utils/store/slices/genreSlice";

export const queryClient = new QueryClient

const url = process.env.NEXT_PUBLIC_MOVIES_URL
const apiKey = process.env.NEXT_PUBLIC_API_KEY

export interface MovieListObject {
  adult: boolean
  backdrop_path: string
  genre_ids: [number]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface MoviesQueryReturn {
  page: number
  results: MovieListObject[]
  total_pages: number
  total_results: number
}

// Fetches and returns a list of movies in json format.
export async function fetchMovies(path: string, page=1): Promise<MoviesQueryReturn> {
  const authUrl = `${url}/${path}?api_key=${apiKey}&adult=false&page=${page}`
  console.log(authUrl)
  return fetch(authUrl).then(response => response.json())
}

export async function fetchGenres(): Promise<GenreList> {
  const target = 'genre/movie/list'
  const authUrl = `${url}/${target}?api_key=${apiKey}&adult=false`
  return fetch(authUrl).then(response => response.json())
}
