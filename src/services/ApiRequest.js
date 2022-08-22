import axios from 'axios';

const API = axios.create(
{
    baseURL : 'https://hbb-jcsf.herokuapp.com/',
});

export { API }