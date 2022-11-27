import React from 'react'
import Image from 'next/image'
import { getMovieImageUrl } from '@components/movie/utils'

const posterWidth = 185

interface PosterProps {
  posterPath: string
  alt: string
  className?: string
}

const Poster = (props: PosterProps) => {
  const {posterPath, alt, className} = props
  return (
    <Image 
      width={posterWidth}
      className={`${className} rounded h-auto w-auto`}
      height={250}
      src={getMovieImageUrl(posterPath, posterWidth)}
      alt={alt}/>
  )
}

export default Poster
