import axios from "axios"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import DetailCard from "../components/DatailCard"

export default function MoviePage() {

    const { id } = useParams()

    const [movie, setMovie] = useState({})

    const redirect = useNavigate()


    function fetchMovie() {
        axios.get("http://localhost:3000/api/movies/" + id)
            .then(
                res => {
                    // console.log(res.data);
                    setMovie(res.data)
                }
            )
            .catch(err => {
                console.log(err);
                if (err.status === 404) redirect("/404")
            })
    }

    //useEffect
    // fetchMovie()
    useEffect(fetchMovie, [])

    return (
        <DetailCard key={movie.id} movieProps={movie} />
    )
}