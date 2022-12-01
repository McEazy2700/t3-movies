import React from 'react'

interface ButtonProps {
  onClick?: React.MouseEventHandler
  onKeyDown?: React.KeyboardEventHandler
  children?: React.ReactNode
  className?: string
}

const RefetchButton = (props: ButtonProps) => {
  const { onClick, onKeyDown, children, className } = props
  return (
    <button 
      className={
      `${className} transition-all hover:bg-dark-3 hover:p-1 hover:px-6 border-2 border-light-2/20 px-4 rounded flex items-center justify-center text-sm font-semibold bg-dark-3/60`}
      onClick={onClick}onKeyDown={onKeyDown}>
      {children}
    </button>
  )
}

export default RefetchButton
