import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import * as movieAPI from '../services/movieAPI';

export default function Reviews() { 
    const { movieId } = useParams();    
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        movieAPI.fetchMovieReviewById(movieId).then(r => r.results).then(setReviews);        
    }, [movieId]);

    return (
        <>
            <h2> Reviews </h2>
            { (reviews.length > 0) ? (
                <ul>
                    {reviews.map(review => (
                        <li key={review.id}>
                            <p><b>Author: {review.author}</b></p>
                            <p>{review.content}</p>
                        </li>
                    ))}
                </ul>
            ) : <p>We don't have any reviews for this movie.</p>}
        </>
    )
}
