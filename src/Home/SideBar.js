// ####### LINK LIST #######
import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBar(props) {

    // ----- Props, State, and Params -----
    const { posts } = props;

    return (
        <div id='sidebar'>
            <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80" 
                alt="profile pic"
            />
            <h1>John Doe</h1>
            <p>San Francisco, CA</p>
            <h3>Select a Day</h3>
            <div id='blog-entry-div'>
                <ul>
                {   posts.map( post => {
                        return (
                            <li key={post.id} >
                                <Link 
                                    to={`/${post.id}`}
                                >
                                    {post.timestamp}
                                </Link>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
    )
}