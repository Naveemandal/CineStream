import axios from 'axios';
import Axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmZiZjc5MmI4NDZhNzBhMDU1MDFkZjNmZTYyMGM1MCIsIm5iZiI6MTc1NjA2NTEwOC42MTQsInN1YiI6IjY4YWI2ZDU0ZWMwNmVjNTJhZDZjZTUxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hVRf4ZM5pnyQy7Jg0q7EOECYqQ3eK4iAu0x1EyWqCxw'
  }

})

export default instance;