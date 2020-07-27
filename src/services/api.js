import axios from 'axios';

const api = axios.create({
    baseURL : 'http://192.168.0.105:3000',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
});
export default api;