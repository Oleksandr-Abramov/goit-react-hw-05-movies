import { MoviesHomeItem } from 'components/MoviesHomeItem/MoviesHomeItem';
import { useEffect, useState } from 'react';
import { trends } from 'ServiceApi/service';
import s from './Home.module.css';

export const Home = () => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    trends()
      .then(setMovies)
      .catch(function (error) {
        console.log(error.toJSON());
      });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul className={s.list}>
        <MoviesHomeItem movies={movies} route={'movies/'} />
      </ul>
    </>
  );
};
