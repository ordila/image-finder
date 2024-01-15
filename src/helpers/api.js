import { api } from '../constants/api/api.constants';

import axios from 'axios';

const { BASE_URL, API_KEY } = api;

const instance = axios.create({ baseURL: BASE_URL });

export const requestPosts = async (query, page = 1) => {
  const { data } = await instance.get(`/?q=${query}`, {
    params: {
      page: page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return data;
};
