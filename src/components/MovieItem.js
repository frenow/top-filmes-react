import { Link } from "react-router-dom";

export const MovieItem = ({ title, id, poster }) => (
    <li>
        <img src={"https://image.tmdb.org/t/p/original"+poster} alt="poster" width="50" height="60"/><Link to={`movie/${id}`}>{title}</Link>
    </li>
);