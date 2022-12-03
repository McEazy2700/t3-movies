import React from 'react'
import { motion } from 'framer-motion'
import { FaPlay } from 'react-icons/fa'
import styles from './buttons.module.css'

interface PlayButtonProps {
  onClick?: React.MouseEventHandler
}
const PlayButton = (props: PlayButtonProps) => {
  const { onClick } = props
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      key={Math.random()}
      exit={{ opacity: 0 }}
      onClick={onClick}
      className={`${styles.playButton} text-3xl p-5 hover:p-6 transition-all rounded-full`}>
      <FaPlay />
    </motion.button>
  )
}

export default PlayButton
