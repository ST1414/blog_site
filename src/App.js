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

  // ----- Click Handlers -----
  // * add new post
  const handleAdd = (post) => {
    const newPost = {
      ...post,
      id: Date.now(),
      timestamp: Date.now(),
    }
    console.log(newPost)
    setPosts([
      newPost,
      ...posts
    ])
  }

  // * edit existing post
  const handleEdit = (updatedPost) => {
    setPosts(
      posts.map( post => {
        if (post.id === updatedPost.id){
          return updatedPost
        } else {
          return post
        }
      })
    )

  }

  // * delete existing post
  const handleDelete = (deleteId) => {
    setPosts( posts.filter( post => post.id !== deleteId)
    )
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
        <Home 
          posts={posts}
          handleDelete={handleDelete}
        />
      </Route>

      <Route path='/new-post'>
        <NewPost handleAdd={handleAdd}/>
      </Route>

      <Route path='/edit-post/:id'>
        <EditPost posts={posts} handleEdit={handleEdit}/>
      </Route>

      {/* <Footer/> */}
    </div>
  );
}

export default App;
