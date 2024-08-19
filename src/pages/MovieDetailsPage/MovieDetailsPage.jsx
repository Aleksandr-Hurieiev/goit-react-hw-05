import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import { Link, Outlet } from "react-router-dom";
const MovieDetailsPage = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="cast">Movie Cast</Link>
        </li>
        <li>
          <Link to="reviews">Movie Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
