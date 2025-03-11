import MovieCard from "../components/MovieCard"

export default function HomePage() {
    return (
        <>
            <h1>Movies</h1>
            <div className="container">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </>
    )
}