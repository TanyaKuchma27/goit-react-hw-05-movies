import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);

  const handleQueryChange = event => {
    setQuery(event.target.value);              
  };

  const handleSubmit = event => {
    event.preventDefault();
    // if (photo.trim() === '') {
    //     toast.error('Please, enter data');        
    //     return;
    // }  
          
    movieAPI.fetchSearchMovies(query).then(r => r.results).then(setMovies);
    setQuery('');
  };  

  return (  
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={query}
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