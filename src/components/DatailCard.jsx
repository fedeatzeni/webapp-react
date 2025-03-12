import { Link } from "react-router-dom"


export default function DetailCard({ movieProps }) {

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
                            <div><strong>Vote: {review.vote}</strong></div>
                            <div>{review.name}</div>
                        </div>
                    </div>
                ))}

            </div>

            <form>
                <div className="card">
                    <h2>Add Review</h2>

                    <div className="col-12">
                        <input type="text" className="form-control" id="a" placeholder="name" />

                        <input type="text" className="form-control" id="b" placeholder="review" />

                        <input type="text" className="form-control" id="c" placeholder="vote" />

                    </div>
                    <div className="col-12 left">
                        <button type="submit" className="btn btn-danger">Submit</button>
                    </div>
                </div>
            </form>

            <div className="left">
                <Link to="/" className="btn btn-danger">Ritorna alla home</Link>
            </div>
        </div>
    )
}