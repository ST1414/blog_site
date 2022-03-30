import React from 'react';
import {Link} from 'react-router-dom';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

export default function Post(props) {

    // ----- Props, State, and Params -----
    const { post, handleDelete } = props;

    // ----- Click Handlers -----
    const handleDeletePost = (id) => {
        handleDelete(id);
    }

    // Added to react-icons for edit and delete
    // Edit icon uses React Router Link and an EditPost component
    // Delete icon calls handleDelete
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