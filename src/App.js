import React from 'react';
import {Route} from 'react-router-dom'

import NavBar from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';

// import './App.css';  // <<<<<<<<<< CSS HERE?

function App() {
  // ----- Set state -----

  // ----- Initial Data Call -----

  return (
    <div className="App">
      <NavBar/>
      
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
