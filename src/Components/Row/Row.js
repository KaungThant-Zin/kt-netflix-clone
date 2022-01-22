import "./Row.css"
import { useEffect, useState } from "react";
import axios from "../axios/axios";
const Row = ({ title, fetchUrl, isLargeRow = false }) => {

    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
        }
        fetchData();
    }, [fetchUrl])
    console.log(movies)
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row-posters">
                {movies.map((movie) => (
                    <img className={`${isLargeRow ? 'row-poster-large' : 'row-poster'}`} src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`} alt={movie.name} key={movie.id} />
                ))}
            </div>
        </div>
    )
}

export default Row
