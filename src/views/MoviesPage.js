import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';

export default function MoviesPage() {
  const [queryInput, setQueryInput] = useState('');
  const [movies, setMovies] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleQueryChange = event => {
    setQueryInput(event.target.value);

    if (event.target.value === '') {
      setSearchParams({});
      return;
    }
    setSearchParams({ query: event.target.value });   
  };

  const handleSubmit = event => {
    event.preventDefault();
    
    movieAPI.fetchSearchMovies(queryInput).then(r => r.results).then(setMovies);
    setQueryInput('');
  }; 
  
  useEffect(() => {
    if (searchParams.get('query') !== null) {
      const searchQuery = searchParams.get('query');
      movieAPI.fetchSearchMovies(searchQuery).then(r => r.results).then(setMovies);      
    }
  }, [searchParams]);

  return (  
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={searchParams.get('query') === null ? '' : searchParams.get('query')}
          onChange={handleQueryChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <button type="submit">Search</button>
      </form> 
      
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title || movie.original_name}</Link>
            </li>
          ))}
        </ul>
      )} 
    </>
  );
}