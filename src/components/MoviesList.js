import { MovieItem } from "./MovieItem";

export const MoviesList = ({ movies }) => (
    <section>
        <ul>
            {movies.map(m => <MovieItem id={m.id} title={m.title} poster={m.poster_path} />)}
        </ul>
    </section>
)