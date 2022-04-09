import { Route, Routes } from 'react-router-dom';
import Container from './Container';
import HomePage from '../views/HomePage';
import MoviesPage from '../views/MoviesPage';
import MovieDetailsPage from '../views/MovieDetailsPage';
import Cast from '../views/Cast';
import Reviews from '../views/Reviews'

export default function App() {
  return (
      <Routes> 
        <Route path="/" element={<Container />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />}/>
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path=":cast" element={<Cast />} />
            <Route path=":reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes> 
    
  );
}