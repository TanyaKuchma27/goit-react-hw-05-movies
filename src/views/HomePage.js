import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    movieAPI.fetchTrendingMovies().then(r => r.results).then(setMovies);  
  }, []);  

  return (    
    <> 
      <h1>Trending today</h1>         
      {movies && (
        <ul>
          
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location}}>{movie.title || movie.original_name}</Link>
            </li>
          ))}
        </ul>
      )} 
    </>
  );
}