import { Link } from "react-router-dom"

import ReviewForm from "./ReviewForm"
import Stars from "./Stars"


export default function DetailCard({ movieProps, realoadReviews }) {

    const { id, title, director, abstract, image, reviews } = movieProps

    return (
        <div className="detail" >
            <div className="flex">
                <img src={image} alt={title} />
                <div>
                    <h5 className="card-title">{title}</h5>
                    <div>director: {director}</div>
                    <div>{abstract}</div>
                </div>
            </div>

            <div>
                <h2>Reviews</h2>
                {reviews?.map(review => (
                    <div key={review.id} className="card">
                        <div className="card-body">
                            <p className="card-text">{review.text}</p>
                            <div><strong>Vote: <Stars vote={review.vote} /></strong></div>
                            <div>{review.name}</div>
                        </div>
                    </div>
                ))}

            </div>

            <ReviewForm movie_id={id} realoadReviews={realoadReviews} />

            <div className="left">
                <Link to="/" className="btn btn-danger">Ritorna alla home</Link>
            </div>
        </div>
    )
}