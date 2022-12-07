import React from 'react'
import { motion } from 'framer-motion'
import { fetchGenres } from '@utils/query'
import { useAppDispatch, useAppSelector } from '@utils/store'
import { selectGenres, setGenre } from '@utils/store/slices/genreSlice'
import GenreItem from '@components/movie/genre/GenreItem'
import FullPageLoader from '@components/common/loading/FullPageLoader'

const SideBar = () => {
  const [loading, setLoading] = React.useState(true)
  const genres = useAppSelector(selectGenres)
  const dispatch = useAppDispatch()

  React.useEffect(()=>{
    fetchGenres().then(res => {
      dispatch(setGenre({result: res}))
      setLoading(false)
    })
  },[])

  if (loading) {
    return <FullPageLoader />
  }

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100% '}}
      key={Math.random()}
      className='fixed right-0 bg-dark-2 z-[100] py-1 shadow-md shadow-black h-screen overflow-auto top-12 '
    >
      <ul className='flex flex-col'>
        {genres.genres.map(genre => <GenreItem genre={genre} key={genre.id} />)}
      </ul>
    </motion.div>
  )
}

export default SideBar
