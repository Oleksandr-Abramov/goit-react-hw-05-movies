/* eslint-disable jsx-a11y/img-redundant-alt */
import { BackLink } from 'components/BackLink/BackLink';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { movieDetails } from 'ServiceApi/service';
import s from './MovieDetails.module.css';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [backLinkHrefm, setBackLinkHref] = useState(null);

  const location = useLocation();

  useEffect(() => {
    movieDetails(movieId)
      .then(setMovie)
      .catch(function (error) {
        console.log(error.toJSON());
      });
    setBackLinkHref(location.state?.from);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return (
    <>
      {movie && (
        <div className={s.container}>
          <BackLink to={backLinkHrefm ?? '/'} className={s.button}>
            Back
          </BackLink>
          <div className={s.card}>
            <div className={s.image}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : `https://bpgroup.lv/i/product_images/images/Z2000128425.jpg`
                }
                alt={`Picture ${movie.original_title}`}
                width="350px"
              />
            </div>
            <div className={s.wrapper}>
              <h2>{movie.original_title}</h2>
              <p>User score: {Math.round(movie.vote_average * 10)}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <div>
                <h4>Genres</h4>
                {movie.genres.map((el, idx) => (
                  <span key={idx}>{el.name} </span>
                ))}
              </div>
            </div>
          </div>
          <p className={s.info}>Aditional information</p>
          <ul>
            <li>
              <Link to="cast" className={s.list}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" className={s.list}>
                Reviews
              </Link>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </>
  );
};
