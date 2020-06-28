import axios from '../config/axios';

export const getAll = () => {
  return axios.get('/movie').then(res => {
    const { docs, items } = res.data;
    return { data: docs, total: items.total };
  });
};

export const getByID = id => {
  return axios.get(`/movie/${id}`).then(res => res.data);
};
