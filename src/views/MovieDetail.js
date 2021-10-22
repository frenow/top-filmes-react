import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MoviesService } from "../api/MoviesService";

export const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    const fetchMovie = async () => {
        const { data } = await MoviesService.getMovieById(id);
        setMovie(data);
        console.log(data);
    }

    useEffect(() => {
        fetchMovie();
    }, []);

    return (
        <>
            <h1>{movie.title}</h1>

            <article>
                {movie.overview}
            </article>
            <img src={"https://image.tmdb.org/t/p/original"+movie.poster_path} alt="poster" width="500" height="600"/>
            <a href="javascript:history.back()">Go Back</a>
        </>
    )
}