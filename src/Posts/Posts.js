import React from 'react';
import {Link, useParams} from 'react-router-dom';
import Post from './Post';

export default function Posts(props) {

    const { posts, handleDelete } = props;
    const { blogId } = useParams();

    // Use a ternary here to display a single post vs all posts.

    // Alternatively could have had the blogId links (1) route to a 
    // new component for JUST a single post, w/o the side bar. The state
    // posts would now hold a single entry. The user could then navigate
    // back to Home with all blog posts, which would make an API call for
    // all posts and then mount.  If this process was taken, I would remove
    // the ternary here.
    return (
        <div id='posts'>
            {(blogId === undefined || blogId === '0')
                ? posts.map ( post => (
                    <Post key={post.id} post={post} handleDelete={handleDelete} />))
                : 
                posts.filter ( post => post.id === parseInt(blogId) ).map( post => 
                    <Post key={post.id} post={post} handleDelete={handleDelete} />
                )
            }
        </div>
    )
}

