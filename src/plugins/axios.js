import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTdjNGNlZDVmNWM5NWFmNTA1ZTJhMWFlMzg1ZjEzYyIsIm5iZiI6MTc1OTQxNDEyOC4yMzYsInN1YiI6IjY4ZGU4NzcwMjk4MjRlMmEyOWZkMjM4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q7g3-RI7SmcvQJMEjxjDObztxevR5HD2YPoEvZsU-84`,
  },
});

export default api;