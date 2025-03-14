import axios from "axios"

import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function CreateMoviePage() {

    const navigate = useNavigate();


    const initialData = {
        title: "",
        director: "",
        abstract: "",
        image: null,
    }

    const [formDataObj, setFormDataObj] = useState(initialData);

    function setFieldValue(event) {
        const { value, name } = event.target;
        if (name === "image") setFormDataObj({ ...formDataObj, image: event.target.files[0] });
        else setFormDataObj({ ...formDataObj, [name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        axios.post("http://localhost:3000/api/movies/", formDataObj, { headers: { 'Content-Type': "multipart/form-data" } })
            .then(
                () => { navigate("/") }
            )
            .catch(err => console.log(err))

    }

    return (


        <form onSubmit={handleSubmit} className="center">
            <h2>Add a movie</h2>
            <div className="card">

                <div className="col-12">
                    <input type="text" className="form-control" placeholder="title" name="title" onChange={setFieldValue} value={formDataObj.title} />

                    <input type="text" className="form-control" placeholder="director" name="director" onChange={setFieldValue} value={formDataObj.director} />

                    <textarea className="form-control" placeholder="abstract" name="abstract" onChange={setFieldValue} value={formDataObj.abstract} />

                    <input className="form-control" name="image" type="file" onChange={setFieldValue} required />
                </div>

                <div className="col-12 left">
                    <button type="submit" className="btn btn-danger">Submit</button>
                </div>
            </div>
        </form>

    )
}