import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '827ba3debf08ac34bc392bfbafe2c79e';

export const trends = () => {
  return axios
    .get(`/trending/movie/day?api_key=${API_KEY}`)
    .then(({ data }) => data.results);
};

export const movieDetails = id => {
  return axios
    .get(`/movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(({ data }) => data);
};

export const castFetch = id => {
  return axios
    .get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    .then(({ data }) => data.cast);
};

export const reviewsFetch = id => {
  return axios
    .get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    .then(({ data }) => data.results);
};

export const searchMovies = query => {
  return axios
    .get(
      `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    )
    .then(({ data }) => data.results);
};
