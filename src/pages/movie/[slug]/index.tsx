import React, { useEffect, useState } from 'react'
import TMDBBackDrop from '@components/common/backdrop/TMDBBackDrop'
import FullPageLoader from '@components/common/loading/FullPageLoader'
import MovieInfo from '@components/movie/movie-info/MovieInfo'
import MovieTeaser from '@components/movie/movie-tease/MovieTeaser'
import { fetchTMDBMovie, fetchTMDBMovieImages, fetchYTSMovie } from '@utils/query'
import { useAppDispatch, useAppSelector } from '@utils/store'
import { selecteTMDBMovie, setMovie } from '@utils/store/slices/tmdbMovieDetailSlice'
import { selectYtsMovie, setYTSMovie } from '@utils/store/slices/ytsMovieDetailsSlice'
import { setImages } from '@utils/store/slices/tmdbMovieImagesSlice'
import { useRouter } from 'next/router'
import Modal from '@components/common/modal/Modal'
import AccentButton from '@components/common/buttons/AccentButtons'
import { prepTorrent } from '@components/movie/torrent/prepTorent'
import loadjs from 'loadjs'
import DownloadMovie from '@components/movie/download/DownloadMovie'
import getNavLayout from 'src/layouts/hooks/getNavLoayout'

const script = "https://cdn.jsdelivr.net/npm/@webtor/embed-sdk-js/dist/index.min.js"

const MovieDetail = () => {
  const [error, setError] = useState()
  const [loading, setLoading] = useState({
    tmdb: true,
    yts: true,
    images: true
  })
  const router = useRouter()
  const { slug } = router.query
  const slugWords = slug?.toString().split('-')
  const movieId = slugWords ? slugWords[slugWords?.length - 1] : ''
  const dispatch = useAppDispatch()
  const [download, setDownload] = useState({
    open: false,
    loading: false,
    torrentURI: ''
  })
  const [video, setVideo] = useState({
    open: false,
    loading: false,
    torrentURI: ''
  })

  const tmdbMovie = useAppSelector(selecteTMDBMovie)
  const ytsMovie = useAppSelector(selectYtsMovie)


  const setUri = (uri: string) => setVideo(curr => {
    return { ...curr, torrentURI: uri }
  })

  const setDownloadUri = (uri: string) => setDownload(curr => {
    return { ...curr, torrentURI: uri }
  })

  const downloadVideo = async (url: string) => {
    setDownload(curr => { return { ...curr, open: true, loading: true } })
    prepTorrent(url, setDownloadUri).then(() => {
      const timer = setTimeout(() => {
        setDownload(curr => { return { ...curr, loading: false } })
      }, 6000)
      return () => clearTimeout(timer)
    })
  }

  const playVideo = async (url: string) => {
    setVideo(curr => { return { ...curr, open: true, loading: true } })
    prepTorrent(url, setUri).then(() => {
      const timer = setTimeout(() => {
        setVideo(curr => { return { ...curr, loading: false } })
      }, 5000)
      return () => clearTimeout(timer)
    })
  }

  const closeDownload = () => {
    setDownload(curr => { return { ...curr, open: false } })
  }

  const closeVideo = () => {
    setVideo(prev => { return { ...prev, open: false } })
  }

  useEffect(() => {
    if (movieId) {
      fetchTMDBMovie(movieId).then(result => {
        fetchYTSMovie(result.imdb_id.toString() ?? '').then(ytsResult => {
          dispatch(setYTSMovie(ytsResult))
          setLoading(curr => { return { ...curr, yts: false } })
        }).catch(err => setError(err))
        dispatch(setMovie(result))
        setLoading(curr => { return { ...curr, tmdb: false } })
      }).catch(err => setError(err))
      fetchTMDBMovieImages(movieId).then(response => {
        dispatch(setImages(response))
        setLoading(curr => { return { ...curr, images: false } })
      })
    }
  }, [movieId])


  if (loading.tmdb || loading.yts || loading.images) {
    return <FullPageLoader />
  }
  if (error) {
    return (
      <div>
        <h2>Something went Wrong</h2>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <>
      <TMDBBackDrop>
        {video.loading || download.loading && <FullPageLoader className='bg-dark-2 z-[10000]' />}
        <MovieTeaser onDownload={downloadVideo} onPlay={playVideo} movie={tmdbMovie} ytsMovie={ytsMovie} />
        <MovieInfo
          companies={tmdbMovie.production_companies}
          overview={tmdbMovie.overview}
          title={tmdbMovie.original_title}
          trailerCode={ytsMovie.data?.movie?.yt_trailer_code}
        />
        <Modal isOpen={download.open} onClose={closeDownload}>
          <div className='flex flex-col p-3 overflow-auto items-center justify-center'>
            <DownloadMovie torrentURI={download.torrentURI} close={closeDownload} />
          </div>
        </Modal>
        <Modal isOpen={video.open} onClose={closeVideo}>
          <div className='rounded-lg relative gap-2 mt-36 p-4 w-full min-h-[60vh] flex flex-col items-center justify-center'>
            <div className='w-[99vw] md:w-[80vw] relative lg:w-[70vw] aspect-video overflow-hidden rounded-xl'>
              <video id='player' controls className='w-full rounded-xl aspect-video' height={'100%'} width={'100%'} src={video.torrentURI}>
                <track srcLang="en" label="test" default src="https://raw.githubusercontent.com/andreyvit/subtitle-tools/master/sample.srt" />
              </video>
            </div>
            <AccentButton onClick={closeVideo}>Close</AccentButton>
          </div>
        </Modal>
      </TMDBBackDrop>
      <div className='text-transparent'>
        {/* @ts-ignore */}{/* eslint-disable-line */}
        {setTimeout(() => loadjs(script), 300)}
      </div>
    </>
  )
}

export default MovieDetail

MovieDetail.getLayout = getNavLayout
