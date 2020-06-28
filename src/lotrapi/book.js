import axios from '../config/axios';

export const getAll = () => {
  return axios.get('/book').then(res => {
    const { docs, items } = res.data;
    return { data: docs, total: items.total };
  });
};

export const getByID = id => {
  return axios.get(`/book/${id}`).then(res => res.data);
};
