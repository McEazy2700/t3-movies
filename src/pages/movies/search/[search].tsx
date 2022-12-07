import React from 'react'
import MoviesList from "@components/movie/movies-list/MoviesList"
import { serarchMovies as searchMovies } from "@utils/query"
import { useAppDispatch } from "@utils/store"
import { setMovies } from '@utils/store/slices/moviesSlice'
import FullPageLoader from '@components/common/loading/FullPageLoader'
import { useRouter } from 'next/router'
import getNavLayout from 'src/layouts/hooks/getNavLoayout'


const SearchMovies = () => {
    const [loading, setLoading] = React.useState(true)
    const { search } = useRouter().query
    const dispatch = useAppDispatch()
    React.useEffect(()=>{
        if (search ){
            setLoading(true)
            searchMovies(search?.toString() ?? '').then(res => {
                dispatch(setMovies(res))
                setLoading(false)
            })
        }
    },[search])

    const getSearchResult = (page: string | number) => {
        return searchMovies(search?.toString() ?? '', page)
    }

    if (loading) {
        return <FullPageLoader />
    }
  return (
    <div className='flex flex-col sm:p-2 gap-3'>
        <div className='flex gap-2 items-center bg-gradient-to-b shadow from-dark-3 to-dark-2 w-fit overflow-hidden rounded'>
            <span className='flex items-center bg-dark-2 p-1 px-2 font-bold'>Search</span>
            <span className='flex items-center p-1 px-2 italic font-semibold'>{search?.toString()}</span>
        </div>
        <MoviesList fetchMovies={getSearchResult} />
    </div>
  )
}

SearchMovies.getLayout = getNavLayout
export default SearchMovies
