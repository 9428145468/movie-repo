// utils/axios.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:6000/api/v1', // Replace with your backend URL
  withCredentials: true, // Enable if your backend sets cookies
});

export default axiosInstance;
