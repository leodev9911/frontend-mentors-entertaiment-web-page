import { TMDBUrls } from "./urls"

export const getAllMovies = async () => {
  try {
    const res = await fetch(`${TMDBUrls.movies.all}?api_key=da49dd25ee3e64a3a291085261895afc`)
    console.log(TMDBUrls.movies.all)
    console.log(res)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}