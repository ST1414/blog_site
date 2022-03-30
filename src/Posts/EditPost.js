import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';


export default function EditPost(props) {
    
    // ----- Props, State, and Params -----
    const { handleEdit } = props;
    const [ form, setForm ] = useState();
    
    const { id } = useParams();
    const history = useHistory();
    const post = props.posts.find( post => post.id === parseInt(id))
    
    // ----- Click Handlers -----
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    // * Cancel new post and navigate home
    const handleCancel = (e) => {
        e.preventDefault();
        history.push("/");
    }

    // * Update edit blog post to the database
    const handleSubmit = (e) => {
        e.preventDefault();
        handleEdit(form);
        history.push("/");
    }

    useEffect( () => {
        setForm(post);
    }, [post])

    // ----- If statement for when state is loading -----
    if (form === undefined){
        return <p>Loading...</p> 
    } 

    return (
        <form className='new-edit-post'>
            <div className="new-edit-entry">
                <h2>Edit Post: </h2>
            </div>
            <div className="new-edit-entry">
                <label>Title: </label>
                <input 
                    type="text" 
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    autoFocus={true}
                />
            </div>
            <div className="new-edit-entry">
                <label>Blog Text: </label>
                <textarea 
                    type="text" 
                    name="text"
                    value={form.text}
                    onChange={handleChange}
                />
            </div>
            <div className="new-edit-entry-btns">
                <button className='btn cancel-btn' onClick={(e) => handleCancel(e)}>Cancel</button>
                <button className='btn update-btn' onClick={(e) => handleSubmit(e)}>Update</button>
            </div>
        </form>
        

    )
}

