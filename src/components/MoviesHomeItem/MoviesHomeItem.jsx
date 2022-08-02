import { Link, useLocation } from 'react-router-dom';
import s from './MoviesHomeItem.module.css';
import PropTypes from 'prop-types';

export const MoviesHomeItem = ({ movies, route }) => {
  const location = useLocation();

  return (
    <>
      {movies &&
        movies.map(({ id, original_title }) => {
          return (
            <li key={id}>
              <Link
                to={`${route}${id}`}
                state={{ from: location }}
                className={s.item}
              >
                <p>{original_title}</p>
              </Link>
            </li>
          );
        })}
    </>
  );
};

MoviesHomeItem.propTypes = {
  route: PropTypes.string,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      original_title: PropTypes.string,
    })
  ),
};
