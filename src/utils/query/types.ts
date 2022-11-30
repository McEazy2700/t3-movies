export interface TMDBMovieImageObject {
  aspect_ratio: number
  file_path: string
  height: number
  iso_639_1?: string
  vote_average: number
  vote_count: number
  width: number
}

export interface TMDBMovieImageQueryReturn {
  id: number
  logos: TMDBMovieImageObject[]
  posters: TMDBMovieImageObject[]
  backdrops: TMDBMovieImageObject[]
}

export interface TMDBMoviesQueryReturn {
  page: number
  results: TMDBMovieListObject[]
  total_pages: number
  total_results: number
}

export interface TMDBMovieBelongsTo {
  backdrop_path: string
  id: number
  name: string
  poster_path?: string
}

export interface TMDBMovieGenre {
  id: number
  name: string
}

export interface TMDBMovieProductionCompany {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export interface TMDBMovieProductionCountry {
  iso_3166_1: string
  name: string
}

export interface TMDBMovieSpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}

export interface TMDBGenericMovie {
  adult: boolean
  backdrop_path: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  id: number
}

export interface TMDBMovieListObject extends TMDBGenericMovie {
  genre_ids: number[]
}

export interface TMDBMovieDetailReturnType extends TMDBGenericMovie {
  belongs_to_collection: TMDBMovieBelongsTo
  budget: number
  genres: TMDBMovieGenre[]
  homepage: string
  imdb_id: number
  production_companies: TMDBMovieProductionCompany[]
  production_countries: TMDBMovieProductionCountry[]
  revenue: number
  runtime: number
  spoken_languages: TMDBMovieSpokenLanguage[]
  status: string
  tagline: string
}

export interface YTSMovieCast {
  name:	string
  character_name:	string
  url_small_image:	string
  imdb_code:	string
}

export interface YTSMovieTorrent {
  url: string
  hash:	string
  quality: string
  type:	string
  seeds: number
  peers: number
  size:	string
  size_bytes:	number
  date_uploaded: string
  date_uploaded_unix:	number
}

export interface YTSMovieDetail {
  id: number,
  url: string
  imdb_code: string
  title: string
  title_english: string
  title_long: string
  slug: string
  year: number
  rating: number
  runtime: number
  genres: string[]
  download_count: number
  like_count: 10
  description_intro: string
  description_full: string
  yt_trailer_code: string
  language: string
  mpa_rating: string
  background_image:	string
  background_image_original: string
  small_cover_image: string
  medium_cover_image:	string
  large_cover_image:	string
  medium_screenshot_image1:	string
  medium_screenshot_image2:	string
  medium_screenshot_image3:	string
  large_screenshot_image1: string
  large_screenshot_image2: string
  large_screenshot_image3: string
  cast: YTSMovieCast[]
  torrents: YTSMovieTorrent[]
}

export interface YTSMovieDetailsReturnType {
  status: string
  status_message: string
  data?: {
    movie?: YTSMovieDetail
  }
}
