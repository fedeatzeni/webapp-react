import axios from "axios"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import DetailCard from "../components/DatailCard"

export default function MoviePage() {

    const { id } = useParams()

    const [movie, setMovie] = useState({})


    function fetchMovie() {
        axios.get("http://localhost:3000/api/movies/" + id)
            .then(
                res => {
                    // console.log(res.data);
                    setMovie(res.data)
                }
            )
            .catch(err => console.log(err))
    }

    //useEffect
    // fetchMovie()
    useEffect(fetchMovie, [])

    return (
        <DetailCard key={movie.id} movieProps={movie}/>
    )
}