import React from 'react'
import Image from 'next/image'
import { getMovieImageUrl } from '@components/movie/utils'

const posterWidth = 342

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
      className={`${className} sm:max-h-[350px] rounded h-auto w-auto`}
      height={400}
      src={getMovieImageUrl(posterPath, posterWidth)}
      alt={alt}/>
  )
}

export default Poster
