import React, { useEffect, useState } from 'react'
import MovieCard from '@components/movie/movie-card/MovieCard'
import { useAppDispatch, useAppSelector } from '@utils/store'
import { appendMovies, selectMovies } from '@utils/store/slices/moviesSlice'
import { fetchMovies } from '@utils/query'
import RefetchButton from '@components/common/buttons/RefetchButton'

const MoviesList = () => {
  const movies = useAppSelector(selectMovies)
  const [nextPage, setNextPage] = useState(2)
  const popular = "movie/popular"
  const dispatch = useAppDispatch()

  const handeleRefetch = ()=> {
    fetchMovies(popular, nextPage).then(resp => {
      dispatch(appendMovies(resp))
      setNextPage(currPageNum => currPageNum += 1)
    })
  }

  console.log(nextPage)

  return (
    <section className='grid grid-cols-1 gap-4'>
      <ul className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-1 md:gap-2'>
        {movies.results.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </ul>
      <div className='w-full flex items-center justify-center'>
        <RefetchButton onClick={handeleRefetch}>See More</RefetchButton>
      </div>
    </section>
  )
}

export default MoviesList
