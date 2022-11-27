import React from 'react'
import { MovieListObject } from '@utils/query'
import Poster from '@components/common/poster/Poster'

interface MovieCardProps {
  movie: MovieListObject
}


const MovieCard = (props: MovieCardProps) => {
  const { movie } = props
  return (
    <article className='bg-dark-1 p-1 flex flex-col rounded overflow-hidden'>
      <Poster posterPath={movie.poster_path} alt={movie.original_title} />
      <div className='flex py-1 flex-col'>
        <p className='whitespace-nowrap text-ellipsis text-sm overflow-hidden font-semibold'>{movie.original_title}</p>
        <p className='text-xs'>{movie.release_date.split('-')[0]}</p>
      </div>
    </article>
  )
}

export default MovieCard
