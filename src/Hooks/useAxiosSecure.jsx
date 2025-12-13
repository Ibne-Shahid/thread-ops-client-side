import axios from 'axios'
import { useEffect } from 'react';
import useAuth from './useAuth';

const axiosSecure = axios.create({
  baseURL: 'https://garmentsserverside.vercel.app'
})

// useAxiosSecure.js
const useAxiosSecure = () => {
  const { firebaseUser } = useAuth();

  useEffect(() => {
    // Request interceptor
    const requestInterceptor = axiosSecure.interceptors.request.use(
      (config) => {
        if (firebaseUser?.accessToken) {
          config.headers.Authorization = `Bearer ${firebaseUser.accessToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
    };
  }, [firebaseUser]);

  return axiosSecure;
};

export default useAxiosSecure