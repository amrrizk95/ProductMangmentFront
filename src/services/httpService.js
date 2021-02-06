import {apiUrl} from '../config.json'
import axios from 'axios'

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  const tokenKey = "token";

  axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
});








export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete,
    // setJwt
}