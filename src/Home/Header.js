import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {

    return (
        <div id='header'>
            <div className='header-l'>
                My Blog Site
            </div>
            <div className='header-r'>
                <Link to='/'>Home</Link>
                <p> | </p>
                <Link to='/new-post'>New Post</Link>
            </div>
        </div>
    )

}