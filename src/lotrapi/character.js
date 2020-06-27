import axios from '../config/axios';

export const getCharacters = (page, limit) => {
  const begin = page * limit;
  const end = begin + limit;

  return axios.get('/character').then(res => {
    const { docs, items } = res.data;
    const listSize = docs.length;

    if (begin > listSize - 1) {
      return [];
    }

    const data = end <= listSize ? docs.slice(begin, end) : docs.slice(begin);

    return { data, total: items.total, page, limit };
  });
};
