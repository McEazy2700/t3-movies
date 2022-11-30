import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { TMDBMovieListObject } from '@utils/query'
import TrendingMovie from './TrendingMovie'
import { useAppSelector } from '@utils/store'
import { selectTrending } from '@utils/store/slices/trendingSlice'


const TrendingMovies = () => {
  const [showing, setShowing] = useState(0)

  const trendingMovies = useAppSelector(selectTrending)

  const trending = trendingMovies.results.slice(0, 10)

  useEffect(()=>{
    const changeInterval = setTimeout(()=>{

      if (trending && showing < trending?.length -1) {
        setShowing(currShowing => currShowing += 1)
      }else (
        setShowing(0)
      )
    }, 6000)
    return () => clearTimeout(changeInterval)
  },[showing, trending])

    
  return (
    <ul className='flex overflow-hidden'>
      <AnimatePresence>
        {trending &&
          <TrendingMovie key={trending[showing]?.id} movie={trending[showing] ?? {} as TMDBMovieListObject} />
        }
      </AnimatePresence>
    </ul>
  )
}

export default TrendingMovies
