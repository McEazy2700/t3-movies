const secureMovieUrl = process.env.NEXT_PUBLIC_MOVIES_IMAGE_URL

export function getMovieImageUrl(imagePath: string, posterWidth: number): string {
  return `${secureMovieUrl}w${posterWidth}/${imagePath}`
}
