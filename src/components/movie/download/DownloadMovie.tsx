import React from 'react'
import { motion } from 'framer-motion'
import IconButton from '@components/common/buttons/IconButton'

const DownloadMovie = (props: DownloadMovieProps) => {
  const { close, torrentURI } = props
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      key={Math.random()}
      className='flex items-center justify-center'>
      <div className='max-w-[95vw] rounded-md flex shadow-lg shadow-light-2/10 items-center justify-center relative overflow-hidden'>
        <IconButton onClick={close} className='absolute top-0 left-0' />
        <a className='w-full flex flex-col items-center justify-center' href={torrentURI} download></a>
      </div>
    </motion.div>
  )
}

export default DownloadMovie

interface DownloadMovieProps {
  torrentURI: string
  close: () => void
}
