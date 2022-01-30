import "./Banner.css";
import { useState, useEffect } from 'react';
import axios from '../axios/axios';
import requests from '../axios/Requests';
import LoadingMedium from '../Loading/LoadingMedium';

const Banner = () => {
    const cutout = (string, number) => string.length > number ? string.substr(0, number - 1) + '...' : string;

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovie = () => {
             axios.get(requests.fetchNetflixOriginals).then(res => {
                setMovie(
                    res.data.results[
                    //Math.random returns a floating-point number between 0 and 1.Math.floor is then use to convert this floating point number to an integer between 0 and request.data.results.length - 1
                    Math.floor(Math.random() * res.data.results.length - 1)
                    ]
                )
                setLoading(false);
            }).catch(e => console.log(e))
        }
        fetchMovie();
    }, []);


    return (
        <div className="banner" style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
        }}>
            <div className="banner-content">
                <h1 className="banner-title">{movie?.name}</h1>
                <div className="banner-button">
                    <button className="banner-btn">Play</button>
                    <button className="banner-btn">MyList</button>
                </div>
                <>
                    {loading ? <LoadingMedium /> :
                        <h1 className="banner-des">
                            {cutout(`${movie?.overview}`, 150)}
                        </h1>
                    }
                </>
            </div>
            <div className="banner-fade" />
        </div>
    )
}

export default Banner
