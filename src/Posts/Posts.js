import React from 'react';
import {Link, useParams} from 'react-router-dom';
import Post from './Post';

import './posts.css';

export default function Posts(props) {

    const { posts, handleDelete } = props;
    const { blogId } = useParams();

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

