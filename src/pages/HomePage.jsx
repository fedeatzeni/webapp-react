import axios from "axios"

import { useState, useEffect } from "react"

import MovieCard from "../components/MovieCard"

export default function HomePage() {

    const [movies, setMovies] = useState([])

    function fetchMovies() {
        axios.get("http://localhost:3000/api/movies/")
            .then(
                res => {
                    // console.log(res.data);
                    setMovies(res.data)
                }
            )
            .catch(err => console.log(err))
    }

    //useEffect
    // fetchMovies()
    useEffect(fetchMovies, [])

    function renderMovies() {
        return movies.map(movie => <MovieCard key={movie.id} movieProps={movie} />)
    }

    return (
        <>
            <h1>Movies</h1>
            <div className="container">
            {renderMovies()}
            </div>
        </>
    )
}