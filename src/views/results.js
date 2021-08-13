import SearchContext from "../context/SearchContext"
import { useContext } from "react"
import MovieCard from "../components/MovieCard"

export default function Results() {
  var [results] = useContext(SearchContext)
  console.log(results)

  return (
    <div>
      {results?.map(result => <MovieCard
        key={result.imdbID + result.Title}
        poster={result.Poster}
        title={result.Title}
        year={result.Year}
      />)}
    </div>
  )
}