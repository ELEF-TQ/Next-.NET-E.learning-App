import axios from 'axios';
import { getCookie } from 'cookies-next';

const api = axios.create({
  baseURL: 'https://localhost:5000', 
  timeout: 5000, 
  headers: {
    'Content-Type': 'application/json',
  },
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
