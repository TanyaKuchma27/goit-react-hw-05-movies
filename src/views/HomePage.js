// import { useState, useEffect } from 'react';
// import { Link, useMatch } from 'react-router-dom';
// import * as movieAPI from '../services/movieAPI';

export default function HomePage() {
//   const { url } = useMatch();
//   const [movies, setMovies] = useState(null);

//   useEffect(() => {
//     movieAPI.fetchMovies().then(setMovies);
//   }, []);

  return (
      <> 
    <h1>Список фильмов</h1>      

      {/* {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )} */}
    </>
  );
}