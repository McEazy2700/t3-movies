import React from "react";
import { type NextPage } from "next";
import { useAppDispatch } from '@utils/store'
import Head from "next/head";
import MoviesList from "@components/movie/movies-list/MoviesList";
import TrendingMovies from "@components/movie/trending/TrendingMovies";
import { fetchGenres, fetchMovies,  TMDBMoviesQueryReturn } from '@utils/query'
import { GenreList, setGenre } from "@utils/store/slices/genreSlice";
import { setMovies } from "@utils/store/slices/moviesSlice";
import { setTrending } from "@utils/store/slices/trendingSlice";

interface HomePageProps {
  genres: GenreList
  movies: TMDBMoviesQueryReturn
  trending: TMDBMoviesQueryReturn
}

export async function getServerSideProps(){
  const popular = "movie/popular"
  const trendingPath = 'trending/movie/week'
  const genres = await fetchGenres().catch(() => null)
  const movies = await fetchMovies(popular).catch(() => null)
  const trending = await fetchMovies(trendingPath).catch(() => null) 
  return {
    props: {
      genres,
      movies,
      trending
    }
  }
}


const popular = "movie/popular"
const getPopularMoives = (page: string | number) => {
  return fetchMovies(popular, page)
}

const Home: NextPage<HomePageProps> = (props) => {
  const { genres, movies, trending } = props // eslint-ignore-line
  const dispatch = useAppDispatch()
  dispatch(setGenre({result: genres}))
  dispatch(setMovies(movies))
  dispatch(setTrending(trending))


  console.log({genres, movies, trending})
  if (!genres || !movies || !trending) {
    return (
      <div>
        <h1>Something Went wrong</h1>
        <p>Please Check your internet connection</p>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-2 md:p-5 gap-3 flex flex-col">
        <TrendingMovies />
        <MoviesList fetchMovies={getPopularMoives} />
      </main>
    </>
  );
};

export default Home;
