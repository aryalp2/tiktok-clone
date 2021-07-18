import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tiktok-mern-app-backend.herokuapp.com/"
});

export default instance;