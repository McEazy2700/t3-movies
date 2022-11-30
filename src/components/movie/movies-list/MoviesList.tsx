import React, { useState } from 'react'
import MovieCard from '@components/movie/movie-card/MovieCard'
import { useAppDispatch, useAppSelector } from '@utils/store'
import { appendMovies, selectMovies } from '@utils/store/slices/moviesSlice'
import { fetchMovies } from '@utils/query'
import RefetchButton from '@components/common/buttons/RefetchButton'
import FullPageLoader from '@components/common/loading/FullPageLoader'

const MoviesList = () => {
  const movies = useAppSelector(selectMovies)
  const [loadingNext, setLoadingNext] = useState(false)
  const [nextPage, setNextPage] = useState(2)
  const popular = "movie/popular"
  const dispatch = useAppDispatch()

  const handeleRefetch = ()=> {
    setLoadingNext(true)
    fetchMovies(popular, nextPage).then(resp => {
      dispatch(appendMovies(resp))
      setNextPage(currPageNum => currPageNum += 1)
      setLoadingNext(false)
    })
  }


  return (
    <section className='grid grid-cols-1 gap-4'>
      <ul className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-1 md:gap-2'>
        {movies.results.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </ul>
      {loadingNext && <FullPageLoader className='bg-dark-1/80' />}
      <div className='w-full flex items-center justify-center'>
        <RefetchButton onClick={handeleRefetch}>See More</RefetchButton>
      </div>
    </section>
  )
}

export default MoviesList
