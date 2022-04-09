import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { Section, Info, Additional } from './MovieDetailsPage.styled'; 
import * as movieAPI from '../services/movieAPI';

export default function Cast() { 
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);

    useEffect(() => {
        movieAPI.fetchMovieCastById(movieId).then(r => r.cast).then(setCast);        
    }, [movieId]);

    return (
        <>
            {console.log(cast)}
            <h1> Cast </h1>
            {cast && (
                <ul>
                    {cast.map(actor => (
                        <li key={actor.id}>
                            <img src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
                        alt={cast.name}
                        width={100}
                    />
                        
                        
                    
                    <p>{actor.name}</p>
              
            </li>
          ))}
                        
                    
                    
                        
                </ul>
            )}
        </>
    )
}
