import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { NavLink, Route, Routes } from 'react-router-dom';
import s from './App.module.css';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { lazy, Suspense } from 'react';
import { NotFound } from 'pages/NotFound/NotFound';

const MovieDetailsLazy = lazy(() => import('../pages/MovieDetails'));

export const App = () => {
  return (
    <div className={s.container}>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            s.link + (isActive ? ' ' + s.active : '')
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            s.link + (isActive ? ' ' + s.active : '')
          }
        >
          Movies
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route
          path="/movies/:movieId"
          element={
            <Suspense fallback={<p>Loading ...</p>}>
              <MovieDetailsLazy />
            </Suspense>
          }
        >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
