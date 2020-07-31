const API_KEY = process.env.GATSBY_TMDB_API_KEY
const API_KEY_QUERYSTRING = `api_key=${API_KEY}`
// Get the api details here
// https://developers.themoviedb.org/
const REQUESTS = {
  fetchTrending: `/trending/all/week?${API_KEY_QUERYSTRING}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?${API_KEY_QUERYSTRING}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?${API_KEY_QUERYSTRING}&language=en-US`,
  fetchActionMovies: `/discover/movie?${API_KEY_QUERYSTRING}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?${API_KEY_QUERYSTRING}&with_genre=35`,
  fetchHorrorMovies: `/discover/movie?${API_KEY_QUERYSTRING}&with_genre=27`,
  fetchRomanceMovies: `/discover/movie?${API_KEY_QUERYSTRING}&with_genre=10749`,
  fetchDocumentariesMovies: `/discover/movie?${API_KEY_QUERYSTRING}&with_genre=99`,
}

export default REQUESTS
