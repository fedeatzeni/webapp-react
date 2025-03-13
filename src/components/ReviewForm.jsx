import axios from "axios";
import { useState } from "react"

export default function ReviewForm({ movie_id, realoadReviews }) {

    const initialValue = { text: "", name: "", vote: 1 }

    const [formData, setFormData] = useState(initialValue)

    const setFieldValue = (event) => {
        const { value, name } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const urlEndpoint = `http://localhost:3000/api/movies/${movie_id}/reviews`

    function handleSubmit(event) {
        event.preventDefault()

        axios.post(urlEndpoint, formData, { headers: { 'Content-Type': 'application/json' } })
            .then(
                () => {
                    setFormData(initialValue)
                    realoadReviews()
                }
            )
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="card">
                <h2>Add Review</h2>

                <div className="col-12">
                    <input type="text" className="form-control" placeholder="name" name="name" onChange={setFieldValue} value={formData.name} />

                    <textarea className="form-control" placeholder="review" name="text" onChange={setFieldValue} value={formData.text} />

                    <input type="number" min="1" max="5" className="form-control" placeholder="vote" name="vote" onChange={setFieldValue} value={formData.vote} />

                </div>
                <div className="col-12 left">
                    <button type="submit" className="btn btn-danger">Submit</button>
                </div>
            </div>
        </form>
    )
}