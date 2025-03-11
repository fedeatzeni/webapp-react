import { Link } from "react-router-dom"


export default function DetailCard() {
    return (
        <div className="detail" >
            <div className="flex">
                <img src="/inception.jpg" alt="..." />
                <div>
                    <h5 className="card-title">Titolo</h5>
                    <div>regista</div>
                    <div>descrizione</div>
                </div>
            </div>

            <div>
                <h2>Reviews</h2>
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div><strong>Vote:</strong></div>
                        <div>Name</div>
                    </div>
                </div>
            </div>

            <form>
                <div className="card">
                    <h2>Add Review</h2>

                    <div class="col-12">
                        <input type="text" class="form-control" id="a" placeholder="name" />

                        <input type="text" class="form-control" id="b" placeholder="review" />

                        <input type="text" class="form-control" id="c" placeholder="vote" />

                    </div>
                    <div class="col-12 left">
                        <button type="submit" class="btn btn-danger">Submit</button>
                    </div>
                </div>
            </form>

            <div className="left">
                <Link to="/" className="btn btn-danger">Ritorna alla home</Link>
            </div>
        </div>
    )
}