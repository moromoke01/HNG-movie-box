import React, {useEffect, useState} from 'react'
import MovieCard from "./MovieCard"

export default function Movie() {
  const [movieList, setMovieList] = useState([])

    const getMovie = () =>{
        const apiKey ='3065fb62502770a6077f9eb9869ff63b';
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=1`)
        .then(res => res.json())
        .then(json => setMovieList(json.results.slice(0, 10)))
    }
    useEffect(()=>{

        getMovie()
    }, [])

     
  return (
    <div className="movie-container">
      <h3>Featured Movies</h3>
      <div className="card">
          {movieList.map((movie, index)=>{
            return <MovieCard key={index} {...movie} />
            // <img style={{width:"200px", 
            //         height:"250px", 
            //         marginLeft:"40px", 
            //         marginTop:"60px"}}  
            //   src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie-poster"/>
          })}
      </div>
      
    </div>
  )
}
