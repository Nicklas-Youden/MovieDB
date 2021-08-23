import "../style/MovieCard.scss"
import { Link, navigate } from "@reach/router"

export default function MovieCard({title, year, poster, imdbID}){
	return(
		<article onClick={() => navigate(`/movie/${imdbID}`)} className="movie-card">
			<h2 className="movie__title">
				<Link to = {`/movie/${imdbID}`}>{title}</Link>
			</h2>
			<p className="movie__year">{year}</p>
			<img src={poster} alt="" />
		</article>
	)
	
}