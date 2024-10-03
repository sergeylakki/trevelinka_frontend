// api/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/',
  timeout: 10000,
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API error:', error);
    return Promise.reject(error);
  }
);

export default instance;
