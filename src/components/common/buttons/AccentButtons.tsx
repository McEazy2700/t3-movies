import React from 'react'

/**
 * Accent Orange Button
 */
const AOButton = (props: ButtonProps) => {
  const { children, onClick } = props
  return (
    <button onClick={onClick} className='bg-gradient-to-b hover:px-8 transition-all to-accent-orange-2 bg-accent-orange-1 p-0.5 rounded text-light-2 font-semibold text-lg px-3 from-accent-orange-1'>
      {children}
    </button>
  )
}

export default AOButton

interface ButtonProps {
  onClick?: React.MouseEventHandler
  children?: React.ReactNode
}
