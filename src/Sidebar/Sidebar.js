import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import './sideBar.css'

export default function SideBar(props) {

    // ----- Props, State, and Params -----
    const { posts } = props;
    const history = useHistory();
    const [ selectedBlog, setSelectedBlog ] = useState()

    const handleChange = (e) => {
        setSelectedBlog(parseInt(e.target.value))
        history.push(`/${e.target.value}`)
    }

    return (
        <div id='sidebar'>
            <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80" alt="profile image"/>
            <h1>John Doe</h1>
            <p>San Francisco, CA</p>
            <form id="blog-dropdown" >
                <label>Select a Day</label>
                <select value={selectedBlog} onChange={(e) => handleChange(e)}>
                    <option value={0}>---  ---</option>
                    {posts.map( post => <option key={post.id} value={post.id}>{post.title}</option>)}
                </select>
            </form>
        </div>
    )
}



// <form id="blog">

// </form>