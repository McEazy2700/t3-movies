import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'

interface MenuButtonProps {
  onClick?: React.MouseEventHandler
}
const MenuButton = (props: MenuButtonProps) => {
  const { onClick } = props
  const [open, setOpen] = React.useState(false)
  const handleClick: React.MouseEventHandler = (event) => {
    onClick && onClick(event)
    if (open) {
      setOpen(false)
    }else {
      setOpen(true)
    }
  }
  return (
    <button
      onClick={handleClick}
      className='p-5 md:text-lg hover:scale-105 transition-all'>
      <AnimatePresence exitBeforeEnter>
        {!open ? 
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={Math.random()}
          ><HiMenu /></motion.span>
        : <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={Math.random()}
          ><IoMdClose /></motion.span>}
      </AnimatePresence>
    </button>
  )
}

export default MenuButton
