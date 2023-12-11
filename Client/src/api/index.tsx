import axios from 'axios';
import { getCookie } from 'cookies-next';

const api = axios.create({
  baseURL: 'https://localhost:7144/api/', 
});

api.interceptors.request.use(
  (config) => {
    if (config.headers) {
      const token = getCookie('token'); 
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
