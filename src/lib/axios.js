import Axios, { AxiosRequestConfig } from 'axios';

import { API_URL, API_PREFIX } from '@/config';
import configureAppStore from '../store';
import { setUserDetails, getUserDetails, getAccessToken } from '../store/reducer';

function authRequestInterceptor(config) {
  const store = configureAppStore();
  const accessToken = store.getAccessToken();
  if (accessToken) {
    config.headers.authorization = `${token}`;
  }
  config.headers.Accept = 'application/json';
  return config;
}

export const axios = Axios.create({
  baseURL: API_URL + API_PREFIX,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      const message = error.response?.data?.message || error.message;
      return Promise.reject(error);
    },
);
