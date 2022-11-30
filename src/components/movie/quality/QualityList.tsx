import React from 'react'
import { motion } from 'framer-motion'
import QualityButton from '@components/common/buttons/QualityButton'
import { YTSMovieTorrent } from '@utils/query/types'

interface QualityListProps {
  torrents: YTSMovieTorrent[] | undefined
  onSelect: (url: string) => void
}
const QualityList = (props: QualityListProps) => {
  const { torrents, onSelect } = props
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='flex flex-wrap gap-2 h-10 items-end'>
      {torrents ?
      torrents?.map(torrent => <QualityButton onSelect={onSelect} key={torrent.hash} torrent={torrent} />)
      : <h1>We are sorry this movie isn&apos;t available for viewing</h1>
      }
    </motion.ul>
  )
}

export default QualityList
