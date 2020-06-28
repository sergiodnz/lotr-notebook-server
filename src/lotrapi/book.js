import axios from '../config/axios';

export const getAll = () => {
  return axios.get('/book').then(res => {
    const { docs, items } = res.data;
    return { data: docs, total: items.total };
  });
};
