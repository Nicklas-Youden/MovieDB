import "../style/MovieCard.scss"

export default function MovieCard({title, year, poster}){
	return(
		<article className="movie-card">
			<h2 className="movie__title">
				{title}
			</h2>
			<p className="movie__year">
				{year}
			</p>
			<img src={poster} alt="" />
		</article>
	)
	
}