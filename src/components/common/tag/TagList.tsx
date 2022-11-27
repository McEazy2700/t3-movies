import { useAppSelector } from '@utils/store'
import { selectGenres } from '@utils/store/slices/genreSlice'
import React from 'react'
import Tag from './Tag'

interface TagListProps {
  genre_ids: [number]
}
const TagList = (props: TagListProps) => {
  const { genre_ids } = props

  const allGenres = useAppSelector(selectGenres)
  const genres = allGenres.genres?.filter(genre => genre_ids ? genre_ids.includes(genre.id): [])

  return (
    <ul className='flex gap-1 overflow-x-scroll'>
      {genres && genres.map(genre => <Tag key={genre.id} name={genre.name} />)}
    </ul>
  )
}

export default TagList
