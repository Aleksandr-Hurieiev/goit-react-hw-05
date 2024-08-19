import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

const MovieList = ({ title, id }) => {
  return (
    <>
      <Link to={`/${id}`}>{title}</Link>
      <Outlet />
    </>
  );
};

export default MovieList;
