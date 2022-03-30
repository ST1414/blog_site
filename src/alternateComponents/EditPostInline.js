// ####### EDIT POST INLINE #######

import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import './editPost.css'

const initialFormValues = {
    title: "",
    timestamp: "",
    text: ""
}

export default function EditPost(props) {
    // ----- Initialize State -----
    const [ form, setForm ] = useState(initialFormValues);

    // ----- Pull post id, search posts, set form values -----
    const { id } = useParams();
    const post = props.posts.find( post => post.id === parseInt(id))

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
                    autoFocus={true}
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

