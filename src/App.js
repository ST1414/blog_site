import React from 'react';
import {Route} from 'react-router-dom'

import Header from './Header/Header';
import Home from './Home/Home';
import NewPost from './Posts/NewPost';
import EditPost from './Posts/EditPost'
import Footer from './Footer/Footer';

// import './App.css';  // <<<<<<<<<< CSS HERE?

function App() {
  // ----- Set state -----

  // ----- Initial Data Call -----

  return (
    <div className='App'>
      <Header/>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/new-post'>
        <NewPost />
      </Route>
      <Route path='/edit-post'>
        <EditPost />
      </Route>
      <Footer/>
    </div>
  );
}

export default App;
