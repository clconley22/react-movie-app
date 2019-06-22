import Axios from "axios";
const Popular_API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=30ade5dac6f8d31a4b3bfc2083fcb2d5&language=en-US&page=1";

//  export default axios.create({
//   baseURL: `http://jsonplaceholder.typicode.com/`
// });

export const getPopularMovies = axios
  .get(Popular_API_URL)
  .then(response => response.data);
