import React from 'react';
import {Link} from 'react-router-dom';
import Post from './Post';

import './posts.css';

export default function Posts(props) {

    const { posts, handleDelete } = props;

    return (
        <div id='posts'>
            {posts.length === 0 
                ? null
                : posts.map ( post => (
                        <Post key={post.id} post={post} handleDelete={handleDelete} />
                ))
            }
        </div>
    )
}