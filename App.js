import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Link, Route } from 'react-router-dom'
import DisplaymovieImage from './components/DisplaymovieImage';
import DisplayMovielist from './components/DisplayMovielist';



function App() {
  return (
    <div className="App">
      <div className="row text-center">
      <nav className="navbar navbar-dark bg-primary">
        <h1>Movie App</h1>
 
      </nav>
      </div>

      <div>
        <Link to="/" className="Nav_link">DisplayMovielist</Link>
        <Link to="/poster" className="Nav_link">DisplaymovieImage</Link>
      </div>
      <Switch>
        <Route exact path="/"><DisplayMovielist /></Route>
        <Route path="/poster" ><DisplaymovieImage /></Route>
      </Switch>

    </div>



  );
}

export default App;
