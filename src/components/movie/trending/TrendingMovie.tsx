import React from 'react'
import Poster from '@components/common/poster/Poster'
import { motion } from 'framer-motion'
import TagList from '@components/common/tag/TagList'
import { TMDBMovieListObject } from '@utils/query'
import { getMovieImageUrl } from '../utils'

interface TrendingMovieProps {
  movie: TMDBMovieListObject
}
const backdropWidth = 1280
const TrendingMovie = (props: TrendingMovieProps) => {
  const {movie} = props
  return (
    <motion.article
      initial={{ x: '100%', opacity: 0}}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0, transition: { duration: 0.1 }}}
      transition={{ duration: 0.5 }}
      className='min-w-full lg-p-4 rounded flex items-end md:p-2 md:rounded-lg overflow-hidden  md:aspect-[3/1] relative'>
      
      {/* Backdrop */}
      <div className='object-fill z-[-10] absolute overflow-hidden w-full flex blur justify-center items-center'>
        <img
          loading='lazy'
          className='w-full'
          src={getMovieImageUrl(movie.backdrop_path ?? '', backdropWidth)}
          alt={movie.original_title} />
      </div>
      <div className='bg-gradient-to-b from-transparent to-dark-1 w-full h-full absolute z-[-5]' />
      {/* Backdrop end */}

      <div className='z-20 items-end flex h-fit gap-3'>
        <div className='flex min-w-[100px] flex-1'>
          <Poster className='h-full' posterPath={movie.poster_path} alt={movie.original_title} />
        </div>
        <div className='text-light-2 flex flex-col gap-1.5 py-1 relative h-full text-xs sm:text-sm max-w-2xl'>
          <h3 className='font-bold text-md text-lg md:pb-3'>{movie.title}</h3>
          <p className=''>{movie.overview}</p>
          <TagList genre_ids={movie.genre_ids} />
        </div>
      </div>
    </motion.article>
      // w-full z-20 absolute bottom-3 px-3 gap-3 h-full flex items-end
  )
}

export default TrendingMovie
