import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Title, List, Item, Text  } from './Cast.styled'; 
import * as movieAPI from '../services/movieAPI';
import DefaultPhoto from 'img/def-cast.png';

export default function Cast() { 
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);

    useEffect(() => {
        movieAPI.fetchMovieCastById(movieId).then(r => r.cast).then(setCast);        
    }, [movieId]);

    return (
        <>
            <Title> Cast </Title>
            {!cast && <h2>Loading...</h2>}
            {cast && (
                <List>
                    {cast.map(actor => (
                        <Item key={actor.id}>
                            {actor.profile_path ? (
                            <img src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
                            alt={actor.name}
                            width={100}
                            />
                            ) : (
                                    <img src={DefaultPhoto} alt="actor.name" width={100} height={150}/>
                            )}
                            <Text>{actor.name}</Text>
                            <Text><b>Character:</b></Text>
                            <Text>{actor.character}</Text>
                        </Item>
                    ))}
                </List>
            )}
        </>
    )
}
