import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar';
import Container from './Container';
import HomePage from '../views/HomePage';
import MoviesPage from '../views/MoviesPage';

export default function App() {
  return (
    <Container>
      <AppBar />

      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
      
    </Container>
  );
}