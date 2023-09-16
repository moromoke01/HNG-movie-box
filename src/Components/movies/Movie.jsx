// Movie.jsx

import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './movies.css';

export default function Movie() {
  const [movieList, setMovieList] = useState([]);

  const apiKey = '3065fb62502770a6077f9eb9869ff63b';
  const API_BASE_URL = 'https://api.themoviedb.org/3';
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  const getMovie = () => {
    fetch(`${API_BASE_URL}/movie/top_rated?api_key=${apiKey}&page=1`)
      .then((res) => res.json())
      .then((json) => setMovieList(json.results.slice(0, 10)));
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="movie-container">
      <h2>Featured Movies</h2>
      <div className="movie-grid">
        {movieList.map((movie) => (
          // <Link key={movie.id} to={`/movie/${movie.id}`}> {/* Use Link to navigate to MoviePlay */}
            <div className="movie-card" data-testid="movie-card">
              <img
                style={{ width: '200px', height: '250px' }}
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt="movie-poster"
              />
              <h3 data-testid="movie-title">{movie.title}</h3>
              <p data-testid="movie-release-date">{movie.release_date}</p>
            </div>
          // </Link>
        ))}
      </div>
    </div>
  );
}
