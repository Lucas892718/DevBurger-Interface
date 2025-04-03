import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://server-devburger-production.up.railway.app/'
});

api.interceptors.request.use((config) => {
  const userData = localStorage.getItem('devburger:UserInfo');

  const token = userData && JSON.parse(userData).token;

  config.headers.authorization = `Bearer ${token}`;
  return config;
});
