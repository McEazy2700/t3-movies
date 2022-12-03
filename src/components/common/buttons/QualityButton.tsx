import { YTSMovieTorrent } from '@utils/query/types'
import React from 'react'

interface QualityButtonProps {
  torrent: YTSMovieTorrent
  variant: 'green' | 'orange'
  onSelect: (url: string) => void
}
const QualityButton = (props: QualityButtonProps) => {
  const { torrent, onSelect, variant } = props

  const handleClick = () => {
    onSelect(torrent.url)
  }
  return (
    <button
      className={
        `p-0.5 px-2 hover:scale-125 h-8
        flex items-center justify-center
        bg-gradient-to-b  shadow transition-all
        ${variant === 'orange' ? `from-accent-orange-1` : `from-green-600`}
        ${variant === 'orange' ? `to-red-700` : `to-green-800`}
        shadow-dark-1/60 rounded`}
      onClick={handleClick}>
      {torrent.quality}
    </button>
  )
}

export default QualityButton
