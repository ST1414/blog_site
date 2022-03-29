import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import { RiCloseCircleLine, RiCheckFill } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

// import EditPost from './EditPost'

import './post.css'


function ViewPost (props) {

    const { post, handleEdit, handleDelete } = props;
    
    return (
        <>
            <div className="post-title">
                <h2>{post.title}</h2>    
                <div className="post-icons">
                    <TiEdit
                        onClick={() => handleEdit(post.id)}
                        // className={completed ? "edit-icon hidden" : "edit-icon"}
                    />
                    <RiCloseCircleLine
                        onClick={() => handleDelete(post.id)}
                        className="delete-icon"
                    />
                </div>
                {/* <Link to={`/edit-post/${post.id}`}>Edit</Link> */}
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

function EditPost (props) {
        
    const initialFormValues = {
        title: "",
        timestamp: "",
        text: ""
    }

    // ----- Initialize State -----
    const [ form, setForm ] = useState(initialFormValues);

    // ----- Pull post id, search posts, set form values -----
    // const { id } = useParams();
    // const post = props.posts.find( post => post.id === parseInt(id))
    const { post } = props;

    // ----- Handle On Change
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    useEffect( () => {
        setForm(post);
    }, [])

    return (
        <form id='edit-post'>
            <h2>Edit Post: </h2>
            <div className="edit-title">
                <label>Title: </label>
                <input 
                    type="text" 
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                />
            </div>
            <div className="edit-date">
                <p>Date: {post.timestamp}</p>
            </div>
            <div className="edit-text">
                <label>Blog Text: </label>
                <input 
                    type="text" 
                    name="text"
                    value={form.text}
                    onChange={handleChange}
                />
            </div>
        </form>
    )
}

export default function Post(props) {
    
    const { post } = props;
    const [ isEditing, setIsEditing ] = useState(false);    

    const handleEdit = (id) => {
        console.log('POST.JS - Handle Edit')
        setIsEditing(!isEditing)
    }

    const handleDelete = (id) => {
        console.log('POST.JS - Handle Delete: ', id)
    }


    return (
        <div className="post">
            { !isEditing
                ? <ViewPost post={post} handleEdit={handleEdit} handleDelete={handleDelete}/>
                : <EditPost post={post} />
            }
        </div>
    )
}