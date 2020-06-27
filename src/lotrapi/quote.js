import axios from '../config/axios';

export const getByID = id => {
  return axios.get(`/quote/${id}`).then(res => res.data);
};
