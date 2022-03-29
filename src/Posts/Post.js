import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import { RiCloseCircleLine, RiCheckFill } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

import './post.css'


export default function Post(props) {

    // ----- Props, State, and Params -----
    const { post, handleEdit, handleDelete } = props;

    // ----- Click Handlers -----
    // * Used <Link> instead of a handleEdit 
    const handleDeletePost = (id) => {
        handleDelete(id);
    }

    return (
        <div className="post">
            <div className="post-title">
                <h2>{post.title}</h2>    
                <div className="post-icons">
                    <Link to={`/edit-post/${post.id}`}>
                        <TiEdit className="edit-icon" />
                    </Link>
                    <RiCloseCircleLine
                        onClick={() => handleDeletePost(post.id)}
                        className="delete-icon"
                    />
                </div>
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