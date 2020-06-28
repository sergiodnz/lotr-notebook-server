import axios from '../config/axios';

export const getAll = () => {
  return axios.get('/movie').then(res => res.data.docs);
};

export const getByID = id => {
  return axios.get(`/movie/${id}`).then(res => res.data);
};
