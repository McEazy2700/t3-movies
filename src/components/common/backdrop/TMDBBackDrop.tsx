import React, { useState } from 'react'
import { getMovieImageUrl } from '@components/movie/utils'
import { useAppSelector } from '@utils/store'
import { selectImages } from '@utils/store/slices/tmdbMovieImagesSlice'
import { motion, AnimatePresence } from 'framer-motion'

const backdropWidth = 1280

interface TMDBBackDropProps {
  children?: React.ReactNode
}

const TMDBBackDrop = (props: TMDBBackDropProps) => {
  const { children } = props
  const [showing, setShowing] = useState(4)
  const movieImages = useAppSelector(selectImages)
  const backdrops = movieImages.backdrops.filter(backdrop => backdrop.file_path && backdrop.file_path !== '')
  const showingBackDrop = backdrops[showing]

  React.useEffect(()=>{
    const interval = setInterval(()=>{
      if (showing < backdrops.length - 2 && backdrops[showing + 1]?.file_path) {
        setShowing(curr => curr += 1)
      }else {
        setShowing(0)
      }
    }, 10000)
    return () => clearInterval(interval)
  },[])

  return (
    <AnimatePresence>
      {showingBackDrop && <motion.img 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0 }}
        key={showingBackDrop?.file_path}
        className='fixed inset-0 w-screen h-screen object-cover z-[0]'
        src={getMovieImageUrl(showingBackDrop.file_path, backdropWidth)} 
          />}

      <div className='bg-no-repeat z-[1] absolute inset-0 bg-center transition-all min-h-screen min-w-screen object-cover bg-cover'>
        <div
          className='bg-gradient-to-b grid grid-cols-1 gap-7 p-2 overflow-hidden items-center justify-center text-light-1 from-transparent to-dark-2 min-h-screen min-w-screen'>
          {children}
        </div>
      </div>
    </AnimatePresence>
  )
}

export default TMDBBackDrop
