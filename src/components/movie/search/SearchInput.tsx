import { useRouter } from 'next/router'
import React from 'react'
import { GoSearch } from 'react-icons/go'

const SearchInput = () => {
    const router = useRouter()
    const searchRef = React.useRef() as React.MutableRefObject<HTMLInputElement>
    const handleSearch: React.FormEventHandler = (event) => {
        event.preventDefault()
        const path = `/movies/search/${searchRef.current.value}`
        searchRef.current.value = ''
        router.push(path)
    }

  return (
    <form
        onSubmit={handleSearch}
        className='bg-dark-1/60 flex items-center justify-between rounded border-2 border-dark-1/10 p-1.5 min-w-[50vw]'>
        <input
            ref={searchRef}
            className='bg-transparent w-full outline-none'
            type="text" placeholder='Search' />
        <button className='p-0.5'><GoSearch /></button>
    </form>
  )
}

export default SearchInput
