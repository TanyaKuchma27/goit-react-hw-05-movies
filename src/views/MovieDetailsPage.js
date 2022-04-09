import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { Section, Info, Additional } from './MovieDetailsPage.styled'; 
import * as movieAPI from '../services/movieAPI';

export default function MovieDetailsPage() {
    const { movieId } = useParams();    
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        movieAPI.fetchMovieById(movieId).then(setMovie);        
    }, [movieId]);   

    return (
        <>
            {console.log(movie)}

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
                                {/* <Link to={`/movies/${movie.id}/cast`}>Cast</Link> */}
                                <Link to="cast">Cast</Link>
                            </li> 
                            <li>
                                {/* <Link to={`/movies/${movie.id}/reviews`}>Reviews</Link> */}
                                <Link to="reviews">Reviews</Link>
                            </li> 
                        </ul>
                    </Additional>
                    <Outlet />
                </>
            )}
        </>
    );
};