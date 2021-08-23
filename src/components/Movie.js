import { useEffect, useState } from "react"
import Rating from "./rateing";


export default function Movie({ id }) {
  var [content, setcontent] = useState({})

  useEffect(function () {
    fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?i=${id}&r=json`, {
      "method": "GET",
      "headers": {
        'x-rapidapi-key': 'cbf0eada93mshda4348a7166d51bp13e11bjsna5929dc3ff1a',
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
      }
    })

      .then(response => response.json())
      .then(data => {
        console.log (data)
        setcontent(data)
      })
      .catch(err => {
        console.error(err);
      });
  }, [id])
  return (
    <>
      <h2>{content.Title}</h2>
      <Rating id={content.imdbID}/>
      <h3>{content.Writer}</h3>
      <p>{content.Production}</p>
      <p>{content.Year}</p>
      <img src={content.Poster} alt="" />
      <p>{content.Plot}</p>

    </>


  )
}