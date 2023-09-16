import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = '3065fb62502770a6077f9eb9869ff63b';
const API_BASE_URL = 'https://api.themoviedb.org/3';

const MoviePlay = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    // Fetch movie details using the movie ID
    fetch(`${API_BASE_URL}/movie/${id}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error('Error fetching movie details:', error));
  }, [id]);

  return (
    <div className="movie-page">
      <div className="movie-details">
        <h1>{movie.title}</h1>
        <p>Runtime: {movie.runtime} minutes</p>
        <p>Overview: {movie.overview}</p>
      </div>
      <div className="movie-display">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className="sidebar">
        <h2>More Movies</h2>
        {/* Add a list of related movies or recommendations here */}
      </div>
    </div>
  );
};

export default MoviePlay;
