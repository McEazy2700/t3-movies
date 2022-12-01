import { TMDBMovieGenre } from '@utils/query/types'
import Link from 'next/link'
import React from 'react'

interface GenreItemProps {
  genre: TMDBMovieGenre
}
const GenreItem = (props: GenreItemProps) => {
  const { genre } = props
  return (
    <Link
      className='font-semibold hover:bg-dark-1 active:bg-dark-1 transition-all rounded p-3 px-12'
      href={`/movies/genre/${genre.name}-${genre.id}`}>
      {genre.name}
    </Link>
  )
}

export default GenreItem
