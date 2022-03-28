import React, {useState} from 'react';
import {useParams} from 'react-router-dom';

import './editPost.css'

const initialFormValues = {
    title: "",
    timestamp: "",
    text: ""
}
export default function EditPost(props) {
    // ----- Initialize State -----
    const [ form, setForm ] = useState(initialFormValues)
    
    // ----- Pull post id, search posts, set form values -----
    const { id } = useParams();
    const post = props.posts.filter( post => post.id === parseInt(id))

    // ----- Handle On Change


    return (
        <>
            <div className="post-title">
                {post.title}
                <input 
                    type="text" 
                    name="title"
                    value={form.title}
                    onChange={ (e) => console.log(e.target.value)}
                />
            </div>
            <div className="post-date">
                {post.timestamp}
                <input 
                    type="text" 
                    name="title"
                    value={form.timestamp}
                    onChange={ (e) => console.log(e.target.value)}
                />
            </div>
            <div className="post-text">
                {post.text}
                <input 
                    type="text" 
                    name="title"
                    value={form.text}
                    onChange={ (e) => console.log(e.target.value)}
                />
            </div>
        </>
        


        // <div id='edit-post'>
        //     <h1>
        //         Edit Post
        //     </h1>
            // <input 
            //     type="text" 
            //     name="title"
            //     value={form.title}
            //     onChange={ (e) => console.log(e.target.value)}
            // />
        // </div>
    )
}

