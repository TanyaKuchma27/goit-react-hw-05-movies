import { Route, Routes } from 'react-router-dom';
import Container from './Container';
// import { Suspense } from 'react-is';
// import { lazy } from 'react';
// import { createAsyncView } from 'helpers';

// const HomePage = createAsyncView('HomePage');
// const MoviesPage = createAsyncView('MoviesPage');
// const MovieDetailsPage = createAsyncView('MovieDetailsPage');
// const Cast = createAsyncView('Cast');
// const Reviews = createAsyncView('Reviews');
// const NotFoundView = createAsyncView('NotFoundView');

// const HomePage = lazy(() => import('../views/HomePage'));
// const MoviesPage = lazy(() => import('../views/MoviesPage'));
// const MovieDetailsPage = lazy(() => import('../views/MovieDetailsPage'));
// const Cast = lazy(() => import('../views/Cast'));
// const Reviews = lazy(() => import('../views/Reviews'));
// const NotFoundView = lazy(() => import('../views/NotFoundView'));

import HomePage from '../views/HomePage';
import MoviesPage from '../views/MoviesPage';
import MovieDetailsPage from '../views/MovieDetailsPage';
import Cast from '../views/Cast';
import Reviews from '../views/Reviews';
import NotFoundView from '../views/NotFoundView';

export const App = () => {
  return (
  
      <Routes> 
        <Route path="/" element={<Container />}>
        
            <Route index element={<HomePage />} />
            <Route  path="movies" element={<MoviesPage />}/>
            <Route  path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route  path="cast" element={<Cast />} /> 
              <Route  path="reviews" element={<Reviews />} />
            </Route>
          <Route path="*" element={<NotFoundView />} />
          </Route>
        </Routes>
     
 
  );
}
