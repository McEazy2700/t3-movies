import { TMDBMovieGenre } from '@utils/query/types'
import Link from 'next/link'
import React from 'react'

interface GenreProps {
  genre: TMDBMovieGenre
}

const Genre = (props: GenreProps) => {
  const { genre } = props

  return (
    <Link className='bg-accent-orange-1/70 transition-all hover:bg-accent-orange p-1 px-3 rounded' href={`/movies/genre/${genre.name}-${genre.id}`}>
      {genre.name}
    </Link>
  )
}

export default Genre
