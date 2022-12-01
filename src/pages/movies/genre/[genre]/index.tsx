import React from "react"
import ErrorPage from 'next/error'
import MoviesList from "@components/movie/movies-list/MoviesList"
import { discoverMovies } from "@utils/query"
import { useAppDispatch } from "@utils/store"
import { setMovies } from "@utils/store/slices/moviesSlice"
import FullPageLoader from "@components/common/loading/FullPageLoader"
import { useRouter } from "next/router"

const GenreMovies = () => {
  const [result, setReslut] = React.useState({ loading: true })
  const [error, setError] = React.useState(false)
  const router = useRouter()
  const { genre } = router.query

  const [genreName, genreId] = genre ? genre.toString().split('-') : ['',''];
  const dispatch = useAppDispatch()

  const discover = (page: string | number) => {
    return discoverMovies({ genreId: genreId, page: page})
  }

  React.useEffect(()=>{
    if (genreId){
      discoverMovies({ genreId: genreId }).then(res => {
        dispatch(setMovies(res))
        setReslut(curr => { return {...curr, loading: false }})
      })
    }
  },[genreId])

  if (error) {
    return <ErrorPage statusCode={404} />
  }
  if (result.loading) {
    return <FullPageLoader />
  }

  return (
    <main className="flex flex-col p-2 gap-3">
      <div className="flex font-bold my-2 text-lg overflow-hidden gap-2 bg-dark-3/90 w-fit rounded">
        <span className="p-1 bg-dark-2">Genre: </span>
        <h1 className="italic p-1 pr-4">{genreName}</h1>
      </div>
      <MoviesList fetchMovies={discover} />
    </main>
  )
}

export default GenreMovies

