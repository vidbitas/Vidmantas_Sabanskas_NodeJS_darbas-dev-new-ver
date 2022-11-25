import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
});

instance.interceptors.request.use((config) => {
  const userId = sessionStorage.getItem('user');
  config.headers.Authorization = sessionStorage.getItem(userId);
  // const userId = window.localStorage.getItem('user');
  // config.headers.Authorization = window.localStorage.getItem(userId);

  return config;
});

export default instance;
