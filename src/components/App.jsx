import { Routes, Route } from 'react-router-dom';
import Container from './Container';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('../views/HomePage'));
const MoviesPage = lazy(() => import('../views/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../views/MovieDetailsPage'));
const NotFoundView = lazy(() => import('../views/NotFoundView'));

export const App = () => {
  return ( 
    
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes> 
          <Route path="/" element={<Container />}>
            <Route index element={<HomePage />} />
            <Route  path="movies" element={<MoviesPage />}/>
            <Route  path="movies/:movieId/*" element={<MovieDetailsPage />}/>       
            <Route path="*" element={<NotFoundView />} />
          </Route>
        </Routes>
      </Suspense>
    
  );
}
