import React, {useState} from 'react';
import {Link, useParams} from 'react-router-dom';

import EditPost from './EditPost'

import './post.css'


function ViewPost (props) {
    
    const { post } = props;
    
    return (
        <>
            <div className="post-title">
                <h2>{post.title}</h2>    
                <Link to={`/edit-post/${post.id}`}>Edit</Link>
            </div>
            <div className="post-date">
                {post.timestamp}
            </div>
            <div className="post-text">
                {post.text}
            </div>
        </>
    )
}


export default function Post(props) {
    
    const { post } = props;
    
    return (
        <div className="post">
            <div className="post-title">
                <h2>{post.title}</h2>    
                <Link to={`/edit-post/${post.id}`}>Edit</Link>
            </div>
            <div className="post-date">
                {post.timestamp}
            </div>
            <div className="post-text">
                {post.text}
            </div>
        </div>
    )
}