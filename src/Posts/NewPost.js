import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import './newPost.css'

export default function NewPost (props) {

    // ----- Props, State, and Params -----
    const { handleAdd } = props;
    const history = useHistory();
    const [ form, setForm ] = useState({title:"", text:""})

    // ----- Click Handlers -----
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    // * Cancel new post and navigate home
    const handleCancel = (e) => {
        e.preventDefault()
        history.push("/")
    }
    // * Add new blog post to the database
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAdd(form);
        history.push("/")
    }

    return (
        <form id='new-post'>
            <div className="new-entry">
                <h2>New Post: </h2>
            </div>
            <div className="new-entry">
                <label>Title: </label>
                <input 
                    type="text" 
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    autoFocus={true}
                />
            </div>
            <div className="new-entry">
                <label>Blog Text: </label>
                <textarea 
                    type="text" 
                    name="text"
                    value={form.text}
                    onChange={handleChange}
                />
            </div>
            <div className="new-entry-btn">
                <button 
                    className='cancel-btn'
                    onClick={(e) => handleCancel(e)}
                >
                    Cancel
                </button>
                <button 
                    className='submit-btn'
                    onClick={(e) => handleSubmit(e)}
                >
                    Submit
                </button>
            </div>
        </form>
    )

}