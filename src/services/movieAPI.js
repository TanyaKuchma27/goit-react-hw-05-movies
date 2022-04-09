const BASE_URL = 'https://api.themoviedb.org/3';
const key = '276ded1fd3f5024715e6a06fff45ae5d';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrendingMovies() {
    const trendURL = `${BASE_URL}/trending/all/day?api_key=${key}`;
    return fetchWithErrorHandling(trendURL);
}

export function fetchSearchMovies(query) {
    const searchURL = `${BASE_URL}/search/movie?api_key=${key}&query=${query}&page=1`;
    return fetchWithErrorHandling(searchURL);
}

export function fetchMovieById(movieId) {
    const searchByIdURL = `${BASE_URL}/movie/${movieId}?api_key=${key}`;
    return fetchWithErrorHandling(searchByIdURL);    
}

export function fetchMovieCastById(movieId) {
    const searchCastByIdURL = `${BASE_URL}/movie/${movieId}/credits?api_key=${key}`;
    return fetchWithErrorHandling(searchCastByIdURL);    
}