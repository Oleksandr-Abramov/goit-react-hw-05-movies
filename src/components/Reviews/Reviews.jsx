import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { reviewsFetch } from 'ServiceApi/service';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    reviewsFetch(movieId)
      .then(setReviews)
      .catch(function (error) {
        console.log(error.toJSON());
      });
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        <p>We do not have any reviews for this movie.</p>
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <span>
                <b>Autor: </b>
              </span>
              <span>{author}</span>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
