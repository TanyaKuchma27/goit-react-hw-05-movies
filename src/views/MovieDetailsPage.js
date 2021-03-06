import { useState, useEffect, Suspense, lazy } from 'react';
import { useParams, Link, Outlet, Routes, Route, useLocation} from 'react-router-dom';
import { Section, Info, Additional } from './MovieDetailsPage.styled';
import * as movieAPI from '../services/movieAPI';
import GoBackButton from '../components/GoBackButton';

const Cast = lazy(() => import('../views/Cast'));
const Reviews = lazy(() => import('../views/Reviews'));

export default function MovieDetailsPage() {
    const { movieId } = useParams();    
    const [movie, setMovie] = useState(null); 
    const location = useLocation();
    
    useEffect(() => {
        movieAPI.fetchMovieById(movieId).then(setMovie);        
    }, [movieId]);  

    return (
        <>           
            <GoBackButton location={location}/>
            {!movie && <h2>Loading...</h2>}
            {movie && (
                <>
                    <Section>
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                                alt={movie.title}
                                width={300}
                            />
                        </div>
                        <Info>
                            <h2>{movie.title} ({movie.release_date.slice(0, 4)})</h2>
                            <p>User Score: {movie.vote_average}</p>
                            <h3>Overview</h3>
                            <p>{movie.overview}</p>
                            <h3>Genres</h3>                
                                {movie.genres
                                    .map(genre => <span key={genre.id}>{genre.name} </span>)
                                }
                        </Info>
                    </Section>
                    <Additional>
                        <p>Additional information</p>
                        <ul>
                            <li>                                
                                <Link to="cast" state={location.state}>Cast</Link>
                            </li> 
                            <li>                                
                                <Link to="reviews" state={location.state}>Reviews</Link>
                            </li> 
                        </ul>
                    </Additional>          
                    <Outlet />
                </>
            )} 
            <Suspense fallback={<h2>Loading...</h2>}>
                <Routes> 
                    <Route path="cast" element={<Cast />} /> 
                    <Route path="reviews" element={<Reviews />} />            
                </Routes>
            </Suspense>
        </>
    );
};