import { YTSMovieTorrent } from '@utils/query/types'
import React from 'react'

interface QualityButtonProps {
  torrent: YTSMovieTorrent
  onSelect: (url: string) => void
}
const QualityButton = (props: QualityButtonProps) => {
  const { torrent, onSelect } = props

  const handleClick = () => {
    onSelect(torrent.url)
  }
  return (
    <button
      className='p-0.5 px-2 hover:scale-125 h-8 flex items-center justify-center bg-gradient-to-b from-accent-orange-1 to-red-700 shadow transition-all shadow-dark-1/60 rounded'
      onClick={handleClick}>
      {torrent.quality}
    </button>
  )
}

export default QualityButton
