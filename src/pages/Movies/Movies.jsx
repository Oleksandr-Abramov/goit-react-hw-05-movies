import { MoviesHomeItem } from 'components/MoviesHomeItem/MoviesHomeItem';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'ServiceApi/service';
import s from './Movies.module.css';

export const Movies = () => {
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryMovie = searchParams.get('query');

  const handleChange = evt => {
    setInput(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const querySearch = input !== '' ? { query: input } : {};
    setSearchParams(querySearch);
    setInput('');
  };

  useEffect(() => {
    if (!queryMovie) {
      return;
    }
    searchMovies(queryMovie)
      .then(setMovies)
      .catch(function (error) {
        console.log(error.toJSON());
      });
  }, [queryMovie, searchParams]);

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={input}
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
      {movies && <MoviesHomeItem movies={movies} route={''} />}
    </>
  );
};
