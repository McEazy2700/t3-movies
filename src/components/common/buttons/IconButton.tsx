import React from 'react'
import { IoMdClose } from 'react-icons/io'

const iconCatalogue: IconCatalogue = {
  close: {
    icon: <IoMdClose />,
    color: ''
  }
}
const IconButton = (props: IconButtonProps) => {
  const { variant='close', className, onClick } = props

  return (
    <button
      onClick={onClick}
      className={`${className} p-2 rounded-full bg-red-500/80 text-white transition-all font-semibold hover:scale-125 active:scale-125`}
    >
      {iconCatalogue[variant]?.icon}
    </button>
  )
}

export default IconButton

interface IconButtonProps {
  variant?: 'close' | 'open'
  className?: string
  onClick?: React.MouseEventHandler
}
interface IconVariant {
  icon: React.ReactNode,
  color: string
}

type IconCatalogue = Record<string, IconVariant>
