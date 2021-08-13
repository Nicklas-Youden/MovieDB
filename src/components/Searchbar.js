import SearchContext from "../context/SearchContext";
import "../style/searchbar.scss"
import { useContext } from "react";

export default function SerchBar() {
  var setResults = useContext(SearchContext)[1]

  function handlesubmit(event) {
    event.preventDefault()
    // console.log(event.target.search.value)
    fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?s=${event.target.search.value}&page=1&r=json`, {
      "method": "GET",
      "headers": {
        'x-rapidapi-key': 'cbf0eada93mshda4348a7166d51bp13e11bjsna5929dc3ff1a',
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
      }
    })
      .then(response => response.json())
      .then(data => setResults(data.Search))
      .catch(err => {
        console.error(err);
      });
  }
  return (
    <header>

      <h1>Movie DB</h1>
      <form onSubmit={handlesubmit}>

        <input className="search_input" type="search" name="search" />
        <button className="search_button" type="submit">search</button>
      </form>
    </header>

  )
}