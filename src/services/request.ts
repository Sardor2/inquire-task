import axios from 'axios';

const request = axios.create({
    baseURL: 'https://bloggy-api.herokuapp.com',
});

request.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
);

request.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

export default request;
