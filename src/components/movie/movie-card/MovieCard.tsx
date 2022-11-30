import React from 'react'
import { TMDBMovieListObject } from '@utils/query'
import Poster from '@components/common/poster/Poster'
import Link from 'next/link'

interface MovieCardProps {
  movie: TMDBMovieListObject
}

const createMovieSlug = (movie: TMDBMovieListObject) => {
  const words = movie.title.toLowerCase().split(' ')
  return `${words.join('-')}-${movie.id}`
}

const MovieCard = (props: MovieCardProps) => {
  const { movie } = props
  const movieSlug = createMovieSlug(movie)

  return (
    <Link
      href={`/movie/${movieSlug}`}
      className='bg-dark-3/25 hover:bg-dark-3 transition-all shadow shadow-black/20 p-1 flex flex-col rounded overflow-hidden'>
      <Poster posterPath={movie.poster_path} alt={movie.original_title} />
      <div className='flex py-1 flex-col'>
        <p className='whitespace-nowrap text-ellipsis text-sm overflow-hidden font-semibold'>{movie.original_title}</p>
        <p className='text-xs'>{movie.release_date.split('-')[0]}</p>
      </div>
    </Link>
  )
}

export default MovieCard
