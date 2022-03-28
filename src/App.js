import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom'

import Header from './header/Header';
import Home from './home/Home';
import NewPost from './posts/NewPost';
import EditPost from './posts/EditPost'
// import Footer from './footer/Footer';

import data from './data';


function App() {
  
  // ----- Initialize State -----
    const [posts, setPosts] = useState([]) 

  // ----- Handle Add New Post -----
  const handleAdd = (newPost) => {
    console.log('App.js - handleAdd')
  }
  // ----- Handle Edit Existing Post -----
  const handleEdit = (updatedPost) => {
    console.log('App.js - handleEdit')
  }


  // ----- Initial Data Call -----
  function fetchData() {
    return Promise.resolve({success: true, data})
  }
  useEffect( () => {
    setTimeout( () => {
      fetchData()
        .then( resp => {
          setPosts(resp.data)
        })
    }, 500)
  
  }, [])

  return (
    <div className='App'>
      <Header/>
      <Route exact path='/'>
        <Home posts={posts} />
      </Route>
      <Route path='/new-post'>
        <NewPost handleSubmit={handleAdd}/>
      </Route>
      <Route path='/edit-post/:id'>
        <EditPost posts={posts} handleSubmit={handleEdit}/>
      </Route>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
