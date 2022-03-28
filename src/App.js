import React from 'react';
import NavBar from './NavBar/NavBar';
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
