import React from 'react'
import { motion } from 'framer-motion'
import { AiOutlineDownload } from 'react-icons/ai'

interface DownloadButtonProps {
  onClick?: React.MouseEventHandler
}
const DownloadButton = (props: DownloadButtonProps) => {
  const { onClick } = props
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      key={Math.random()}
      exit={{ opacity: 0 }}
      className='flex items-center overflow-hidden flex-nowrap transition-all gap-1 bg-gradient-to-b from-green-600 to-green-800 rounded hover:scale-105 active:scale-105'
      onClick={onClick}>
      <span className='bg-gradient-to-b from-green-700 to-green-900 p-1 px-1.5 flex items-center'><AiOutlineDownload /></span>
      <span className='px-1.5 flex items-center'>Download</span>
    </motion.button>
  )
}

export default DownloadButton
