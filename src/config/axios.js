import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://the-one-api.herokuapp.com/v1',
  headers: {
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
  timeout: 1000,
});

export default instance;
