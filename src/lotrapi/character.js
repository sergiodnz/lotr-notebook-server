import axios from '../config/axios';

export const getAll = (page, limit) => {
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

export const getByID = id => {
  return axios.get(`/character/${id}`).then(res => res.data);
};

export const getByName = name => {
  return axios.get('/character').then(res => {
    const { docs } = res.data;
    if (!docs || docs.length === 0) {
      return [];
    }
    const matchCriteria = char => char.name.toLowerCase().includes(name);
    return docs.filter(matchCriteria);
  });
};

export const getQuotes = charID => {
  return axios.get(`/character/${charID}/quote`).then(res => {
    const { docs, items } = res.data;
    return { data: docs, total: items.total };
  });
};
