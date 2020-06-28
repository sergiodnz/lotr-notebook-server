import axios from '../config/axios';

export const getAll = () => {
  return axios.get('/book').then(res => res.data.docs);
};

export const getByID = id => {
  return axios.get(`/book/${id}`).then(res => res.data);
};
