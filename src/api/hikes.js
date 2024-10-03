// api/hikes.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/hikes/';

export const getHikes = () => axios.get(API_URL);

export const createHike = (hike) => axios.post(API_URL, hike);
