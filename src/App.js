import React, {useState, useEffect} from 'react';
import {Route, Switch, useHistory} from 'react-router-dom'

import Header from './header/Header';
import Home from './home/Home';
import NewPost from './posts/NewPost';
import EditPost from './posts/EditPost'
// import Footer from './footer/Footer';

import data from './data';


function App() {
  
    // ----- Props, State, and Params -----
    const [posts, setPosts] = useState([]) 
    const history = useHistory();

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
    setPosts( posts.filter( post => post.id !== deleteId) )
    history.push('/');
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

      <Switch>
        
        <Route path='/new-post'>
          <NewPost handleAdd={handleAdd}/>
        </Route>

        <Route path='/edit-post/:id'>
          <EditPost posts={posts} handleEdit={handleEdit}/>
        </Route>

        <Route exact path='/:blogId'>
          <Home 
            posts={posts}
            handleDelete={handleDelete}
          />
        </Route>

        <Route exact path='/'>
          <Home 
            posts={posts}
            handleDelete={handleDelete}
          />
        </Route>
      </Switch>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
