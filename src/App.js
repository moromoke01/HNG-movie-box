

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Movie from "./Components/movies/Movie"
import MoviePlay from './Components/DisplayMovie/MoviePlay';
import Homepage from './Components/Home/Homepage';

function App() {
  return (
    <div className="App">
       <Homepage />
       
        <Router basename="/movie-app">

        <Routes>
          <Route path="/" exact component={Movie} />
          <Route path="/movie/:id" component={MoviePlay} />
        </Routes>

        
      
     </Router>
    </div>
  );
}

export default App;

