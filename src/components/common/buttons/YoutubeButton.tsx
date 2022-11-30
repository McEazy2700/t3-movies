import React from 'react'
import { BsYoutube } from 'react-icons/bs'

interface ButtonProps {
  onClick?: React.MouseEventHandler
  className?: string
}
const YoutubeButton = (props: ButtonProps) => {
  const { onClick, className } = props
  return (
    <button
      onClick={onClick} className={`${className} text-red-600 transition-all md:hover:text-[8rem] md:text-[6rem] hover:text-[6rem] text-[5rem]`}>
      <BsYoutube />
    </button>
  )
}

export default YoutubeButton
