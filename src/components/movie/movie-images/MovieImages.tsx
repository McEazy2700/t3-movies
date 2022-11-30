import { useAppSelector } from '@utils/store'
import { selectYtsMovie } from '@utils/store/slices/ytsMovieDetailsSlice'
import React from 'react'

const MovieImages = () => {
  const movie = useAppSelector(selectYtsMovie).data?.movie
  return (
    <div className='flex gap-2 w-full flex-wrap'>
      <img className='flex-1 min-w-[15rem] w-full rounded' src={movie?.large_screenshot_image1} alt={`${movie?.title} screenshot 1`} />
      <img className='flex-1 min-w-[15rem] w-full rounded' src={movie?.large_screenshot_image2} alt={`${movie?.title} screenshot 2`} />
      <img className='flex-1 min-w-[15rem] w-full rounded' src={movie?.large_screenshot_image3} alt={`${movie?.title} screenshot 3`} />
    </div>
  )
}

export default MovieImages
