import React, {useState, useEffect} from 'react';
import {Route, Switch, useHistory} from 'react-router-dom'

import Header from './home/Header';
import Home from './home/Home';
import NewPost from './posts/NewPost';
import EditPost from './posts/EditPost'
// import Footer from './home/Footer';  // Decided to exclude this

import data from './data';

  // ===========================================================
  // I have mock data call built, pulling mock data from a data folder
  // The provided API returned "Candidate not found", so I will leave this
  // mock API and data.  See the numbers below for changes I would make
  // to this code if the API was working.  API calls would be in REST using
  // the axios library and then / catch statements.  Local state would be
  // updated only upon a successful database update

function App() {
  
    // ----- Props, State, and Params -----
    const [posts, setPosts] = useState([]) 
    const history = useHistory();

  // ----- Click Handlers -----
  // (1) ADD would use axios to POST an entry to {name}/api/
  // and the response would then be prefixed to the posts state
  // The response is used instead of the data sent, as the database
  // should handle the ID and TIMESTAMP

  const handleAdd = (post) => {
    const today = new Date(Date.now());
    const formattedDate = today.getMonth() < 9 ? "0"+today.toLocaleDateString() : today.toLocaleDateString()
    const newPost = {
      ...post,
      id: Date.now(),
      timestamp: formattedDate
    }
    setPosts([
      newPost,
      ...posts
    ])
  }

  // (2) EDIT would use axios to POST an entry to {name}/api/{id}
  // where id is the post id.  The response and id would then be 
  // used to update the local posts state. 
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

  // (3) DELETE would use axios to DELETE an entry to {name}/api/{id}
  // where id is the post id.  The id would then be used to remove
  // the post from the local posts state. 
  const handleDelete = (deleteId) => {
    setPosts( posts.filter( post => post.id !== deleteId) )
    history.push('/');
  }

  // ----- Initial Data Call -----
  // (4) This useEffect would run on mount and pull the initial data set
  // (5) A second useEffect can be added and run on the blogId parameter
  // which would update a new state called post with JUST the specific blog post
  // Alternatively (a) this can be merged in the single useEffect with 
  // a conditional checking the value of blogId or (b) blog posts can be
  // stored in state and filtered when a specific blogId is selected
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
      {/* <Footer /> */}
    </div>
  );
}

export default App;
