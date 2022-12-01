import React from 'react'

const variantColors:variantColorsType = {
  orange: {
    from: 'accent-orange-1',
    to: 'accent-orange-2'
  },
  green: {
    from: 'green-600',
    to: 'green-900'
  }
}
/**
* Accent Button
* @param variant {string} - color type of the button
*/
const AccentButton = (props: ButtonProps) => {
  const { children, onClick, variant = 'orange' } = props

  return (
    <button
      onClick={onClick}
      className={
        `bg-gradient-to-b hover:scale-125
        active:scale-125 transition-all
        to-${variantColors[variant]?.to} from-${variantColors[variant]?.from}
        bg-accent-orange-1 p-0.5 rounded
        text-light-2 font-semibold text-lg px-3`}>
      {children}
    </button>
  )
}


export default AccentButton

interface ButtonProps {
  onClick?: React.MouseEventHandler
  children?: React.ReactNode
  variant?: 'orange' | 'green'
  className?: string
}

type variant = {
  from: string
  to: string
}
type variantColorsType = Record<string, variant>
