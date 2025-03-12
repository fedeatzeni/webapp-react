import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className="h-100 d-flex flex-column align-items-center justify-content-center">
            <h2>Page Not Found</h2>
            <Link className="btn btn-danger" to="/">Back to home</Link>
        </div>
    )
}

export default NotFoundPage