import AOButton from '@components/common/buttons/AccentButtons'
import YoutubeButton from '@components/common/buttons/YoutubeButton'
import Modal from '@components/common/modal/Modal'
import React from 'react'
import ReactPlayer from 'react-player/lazy'

interface YTTrailerProps {
  trailerCode: string
  title?: string
}
const YTTrailer = (props: YTTrailerProps) => {
  const [trailerShowing, setTrailerShowing] = React.useState(false)
  const { trailerCode, title } = props
  const openTrailer = () => setTrailerShowing(true)
  const closeTrailer = () => setTrailerShowing(false)
  return (
    <div className='rounded-3xl w-full overflow-hidden'>
      <div className='w-full relative object-cover'>
        <img className='w-full max-h-[40rem] object-cover' src={`https://img.youtube.com/vi/${trailerCode}/hqdefault.jpg`} alt={`${title} trailer`} />
        <YoutubeButton onClick={openTrailer} className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'/>
      </div>
      <Modal isOpen={trailerShowing} onClose={closeTrailer}>
        <div className='p-4 flex flex-col justify-center items-center gap-3 w-full h-full overflow-y-scroll'>
          <div className='flex gap-3 aspect-video flex-col items-center w-full overflow-hidden rounded-xl'>
            <ReactPlayer
              controls
              width={'100%'}
              height={'100%'}
              url={`https://www.youtube.com/watch?v=${trailerCode}`}
              style={{ aspectRatio: '16 / 9'}}/>
          </div>
          <AOButton onClick={closeTrailer}>Close</AOButton>
        </div>
      </Modal>
    </div>
  )
}

export default YTTrailer
