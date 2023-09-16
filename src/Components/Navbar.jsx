// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// import MovieList from './MovieList';
// import MovieDetails from './MovieDetails';

const API_KEY = '3065fb62502770a6077f9eb9869ff63b';
const API_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function Navbar() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    // Fetch top movies when the app loads
    fetch(`${API_BASE_URL}/movie/popular?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error('Error fetching top movies:', error));
  }, []);

  const handleSearch = () => {
    // Fetch movies based on search term
    fetch(`${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error('Error fetching search results:', error));
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route exact path="/"> */}
            <h1>Top Movies</h1>
            <input
              type="text"
              placeholder="Search for a movie"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            {/* <MovieList movies={movies} imageBaseURL={IMAGE_BASE_URL} />
          </Route> */}
          {/* <Route path="/movies/:id">
            <MovieDetails apiKey={API_KEY} imageBaseURL={IMAGE_BASE_URL} />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default Navbar;
