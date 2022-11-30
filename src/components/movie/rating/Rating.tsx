import React from 'react'
import { BsEmojiHeartEyesFill, BsFillEmojiExpressionlessFill } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'

interface RatingProps {
  name: string
  rating?: number | string
  icon?: React.ReactNode
}

interface RattingsProps {
  vote?: number
  rating?: number
}

export const Rating = (props: RatingProps) => {
  const { name, icon, rating } = props
  return (
    <li className='flex items-center gap-3 bg-dark-3/50 rounded overflow-hidden'>
      <span className='bg-dark-2/60 p-1 px-3'>{name}</span>
      <span className='flex items-center gap-2 pr-2'>
        {rating &&
          <span className='text-yellow-400'>{icon}</span>
        }
        {rating ? rating : '--'}
      </span>
      </li>
  )
}

const Rattings = (props: RattingsProps) => {
  const { vote, rating } = props
  return (
      <ul className='flex gap-1'>
      <Rating 
        name='TMDB'
        rating={vote}
        icon={vote && vote > 6 ? <BsEmojiHeartEyesFill /> : <BsFillEmojiExpressionlessFill />} />
      <Rating
        rating={rating}
        name='IMDB'
        icon={<AiFillStar />}
        />
    </ul>
  )
}
export default Rattings
