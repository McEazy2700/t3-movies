import { TMDBMovieProductionCompany } from '@utils/query/types'
import { useAppSelector } from '@utils/store'
import { selectImages } from '@utils/store/slices/tmdbMovieImagesSlice'
import React from 'react'
import MovieCompany, { Logo } from './MovieCompany'

interface MovieCompaniesProps {
  companies: TMDBMovieProductionCompany[]
}
const MovieCompanies = (props: MovieCompaniesProps) => {
  const { companies } = props
  return (
    <ul className='flex flex-col max-h-full overflow-hidden p-3 bg-light-1/40 absolute right-1 top-1 max-w-xs gap-6 rounded'>
      {companies.map(company => <MovieCompany key={company.id} company={company} />)}
    </ul>
  )
}

export default MovieCompanies

export const MovieCompaniesRow = (props: MovieCompaniesProps) => {
  const { companies } = props
  const logos = useAppSelector(selectImages).logos
  return (
    <div className='flex flex-col h-full overflow-hidden gap-6 py-5'>
      <ul className='flex max-h-full max-w-full right-1 top-1 gap-6'>
        {companies.map(company => <MovieCompany className='min-w-[3rem] bg-light-2/10 p-3 rounded max-w-[9rem] flex items-center whitespace-nowrap overflow-hidden' key={company.id} company={company} />)}
      </ul>
      <ul className='flex max-h-[18rem] flex-wrap overflow-hidden max-w-full right-1 top-1 gap-3'>
        {logos.map(logo => <Logo
            className='min-w-[5rem] p-3 max-w-[10rem] bg-light-2/10 rounded'
            key={logo.file_path}
            path={logo.file_path}
            alt={'logo'}/>)}
      </ul>
    </div>
  )
}
