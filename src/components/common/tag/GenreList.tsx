import { TMDBMovieGenre } from '@utils/query/types'
import React from 'react'
import Genre from './Genre'

interface GenreListProps {
  genres: TMDBMovieGenre[]
}
const GenreList = (props: GenreListProps) => {
  const { genres } = props
  return (
    <ul className='flex gap-1 items-center'>
      {genres.map(genre => <Genre key={genre.id} genre={genre} />)}
    </ul>
  )
}

export default GenreList
