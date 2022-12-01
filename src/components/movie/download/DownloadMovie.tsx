import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import IconButton from '@components/common/buttons/IconButton'

const DownloadMovie = (props: DownloadMovieProps) => {
  const {isOpen, close, torrentURI} = props
  return (
    <AnimatePresence>
    {isOpen && 
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        key={Math.random()}
        className='absolute top-3 left-3 flex items-center justify-center'>
          <div className='rounded-md flex shadow-lg shadow-light-2/10 items-center justify-center relative overflow-hidden'>
            <IconButton onClick={close} className='absolute top-0 right-0'/>
            <a href={torrentURI} download></a>
          </div>
      </motion.div>
    }
    </AnimatePresence>
  )
}

export default DownloadMovie

interface DownloadMovieProps {
  isOpen: boolean
  torrentURI: string
  close: () => void
}
