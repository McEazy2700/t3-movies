import React from 'react'
import Poster from '@components/common/poster/Poster'
import GenreList from '@components/common/tag/GenreList'
import type { TMDBMovieDetailReturnType, YTSMovieDetailsReturnType } from '@utils/query/types'
import MovieCompanies from '../movie-companies/MovieCompanies'
import Rattings from '../rating/Rating'
import PlayButton from '@components/common/buttons/PlayButton'
import QualityList from '../quality/QualityList'
import { AnimatePresence } from 'framer-motion'
import DownloadButton from '@components/common/buttons/DownloadButton'

interface MovieTeaserProps {
  movie: TMDBMovieDetailReturnType
  ytsMovie: YTSMovieDetailsReturnType
  onPlay: (url: string) => void
  onDownload: (url: string) => void
}

const MovieTeaser = (props: MovieTeaserProps) => {
  const { movie, ytsMovie, onPlay, onDownload } = props
  const [showingQuality, setShowingQuality] = React.useState(false)
  const [downloadsShowing, setDownloadsShowing] = React.useState(false)

  const handlePlay = () => {
    setDownloadsShowing(false)
    setShowingQuality(true)
  }

  const handleDownload = () => {
    setShowingQuality(false)
    setDownloadsShowing(true)
  }

  return (
    <>
      <div className='flex md:p-10 relative flex-col justify-center sm:items-end gap-2 sm:flex-row min-w-[95%]'>
        <Poster posterPath={movie.poster_path ?? ''} alt={movie.original_title ?? ''} />
        <div className='flex gap-2 flex-col items-start justify-center w-full' >
          <AnimatePresence>
            {!showingQuality ? <PlayButton onClick={handlePlay} />
              : <QualityList variant='orange' torrents={ytsMovie.data?.movie?.torrents} onSelect={onPlay} />}
          </AnimatePresence>
          <AnimatePresence>
            {!downloadsShowing ? <DownloadButton onClick={handleDownload} />
              : <QualityList variant='green' torrents={ytsMovie.data?.movie?.torrents} onSelect={onDownload} />}
          </AnimatePresence>
          <h1 className='md:text-3xl font-extrabold'>{movie.original_title}</h1>
          <Rattings rating={ytsMovie.data?.movie?.rating} vote={movie.vote_average} />
          <GenreList genres={movie.genres} />
        </div>
        <MovieCompanies companies={movie.production_companies} />
      </div>
    </>
  )
}

export default MovieTeaser
