import axios from "axios";
// поиск популярных фильмов
export default async function showPopularMovies() {
  const URL = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const params = {
    api_key: "ea49d180107dbe9a17a189c6440aa60e",
  };

  const response = await axios.get(`${URL}?`, {
    params,
    headers: { accept: "application/json" },
  });
  return response.data.results;
}
//
