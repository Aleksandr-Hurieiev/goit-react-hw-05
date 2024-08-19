import { useEffect, useState } from "react";
import showPopularMovies from "../../searchMovie-api.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const movies = await showPopularMovies();
        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };
    getPopularMovies();
  }, []);

  return (
    <div>
      <h2>Trending Today</h2>
      {movies.length > 0 && (
        <div>
          {movies.map((movie) => {
            console.log(movie);
            return <li key={movie.id}>
              <MovieList 
              id={movie.id}
              title={movie.title}/>
            </li>;
          })}
        </div>
      )}
    </div>
  );
};

export default HomePage;
