import { Link } from "react-router-dom"

export default function MovieCard({movieProps}) {

    const { id, title, abstract, image} = movieProps 
    
    return (
        <div className="card mb-4" >
            <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{abstract}</p>
                    <Link to={`movies/${id}`} className="btn btn-danger">Dettagli</Link>
                </div>
        </div>
    )
}