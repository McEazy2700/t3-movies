import React from 'react'
import { TMDBMovieProductionCompany } from '@utils/query/types'
import { MovieCompaniesRow } from '../movie-companies/MovieCompanies'
import YTTrailer from '../trailer/YTTrailer'
import MovieImages from '../movie-images/MovieImages'

interface MovieInfoProps {
  companies: TMDBMovieProductionCompany[]
  overview?: string
  trailerCode?: string
  title?: string
}
const MovieInfo = (props: MovieInfoProps) => {
  const { overview, trailerCode, title, companies } = props
  return (
    <div className='flex z-10 flex-col gap-2 p-2 bg-dark-1/80 rounded-md'>
      <div className={`flex-col-reverse md:grid md:grid-cols-2 flex w-full gap-2`}>
        <div className='flex flex-col w-full max-w-[95vw] md:max-w-[80vw] gap-1'>
          <header className='font-semibold'>Overview</header>
          <p className='flex bg-dark-2/60 p-2 h-full md:h-auto rounded'>{overview}</p>
          <MovieCompaniesRow companies={companies}/>
        </div>
        <YTTrailer title={title} trailerCode={trailerCode ?? ''} />
      </div>
      <MovieImages />
    </div>
  )
}

export default MovieInfo
