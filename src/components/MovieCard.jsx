import { Link } from "react-router-dom"

export default function MovieCard() {
    return (
        <div className="card mb-4" >
            <img src="/inception.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Titolo</h5>
                    <p className="card-text">descrizione</p>
                    <Link to="movies/1" className="btn btn-danger">Dettagli</Link>
                </div>
        </div>
    )
}