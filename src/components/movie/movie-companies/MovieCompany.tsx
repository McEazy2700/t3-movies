import { TMDBMovieProductionCompany } from '@utils/query/types'
import React from 'react'
import { getMovieImageUrl } from '../utils'

interface LogoProps {
  path: string
  alt: string
  className?: string
}

interface MovieCompanyProps {
  company: TMDBMovieProductionCompany
  className?: string
}

const MovieCompany = (props: MovieCompanyProps) => {
  const { company, className } = props
  return (
    <div className={`${className} w-full`}>
      <img className='w-full' src={getMovieImageUrl(company.logo_path, 92)} alt={company.name} />
    </div>
  )
}

export default MovieCompany

export const Logo = (props: LogoProps) => {
  const { path, alt, className } = props
  return (
    <img className={`${className} w-full flex-1`} src={getMovieImageUrl(path, 92)} alt={alt} />
  )
}
