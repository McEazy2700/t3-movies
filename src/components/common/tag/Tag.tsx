import React from 'react'

interface TagProps {
  name: string
}
const Tag = (props: TagProps) => {
  const { name } = props
  return (
    <article
      className='rounded flex items-center justify-center text-xs border whitespace-nowrap border-light-2 bg-dark-3/20 p-0.5 px-1.5'>{name}</article>
  )
}

export default Tag
