/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'https://mashrouk-apis.waselly-app.com/api/', // Use baseURL instead of BASE_URL
// });

const axiosInstance = axios.create({
  baseURL: 'https://www.mashrook.somee.com', // Use baseURL instead of BASE_URL
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      // Add the Authorization header only if access_token is present
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default axiosInstance;
