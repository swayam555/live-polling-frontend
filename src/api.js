import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:53842/api',
});

export default API;
