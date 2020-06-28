import axios from 'axios';

let apiToken = '';

export const authMiddleware = (req, res, next) => {
  const token = req.get('Authorization');
  if (token) {
    apiToken = token;
    next();
  } else {
    res.status(403).send({
      error: `YOU SHALL NOT PASS! (not without an authorization header)`,
    });
  }
};

const instance = axios.create({ timeout: 1000 });

instance.interceptors.request.use(
  config => {
    config.baseURL = 'https://the-one-api.herokuapp.com/v1';
    config.headers['Authorization'] = apiToken;
    return config;
  },
  error => Promise.reject(error)
);

instance.interceptors.response.use(
  res => res,
  err => {
    console.log(err);
    return Promise.reject(err);
  }
);

export default instance;
