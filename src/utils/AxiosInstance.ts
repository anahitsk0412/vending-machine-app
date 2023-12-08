import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL,
  headers: { Accept: 'application/json', 'Access-Control-Allow-Origin': '*' },
  withCredentials: true,
});

export default axiosInstance;
