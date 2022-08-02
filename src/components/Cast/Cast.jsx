/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { castFetch } from 'ServiceApi/service';
import s from './Cast.module.css';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    castFetch(movieId)
      .then(setCast)
      .catch(function (error) {
        console.log(error.toJSON());
      });
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul className={s.list}>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id} className={s.item}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : `https://bpgroup.lv/i/product_images/images/Z2000128425.jpg`
                }
                alt={`Picture ${name}`}
                width="100px"
              />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
