import React from 'react';
import {Link} from 'react-router-dom';
import './header.css'

export default function Header() {

    return (
        <div id='header'>
            <div className='header-l'>
                My Blog Site
            </div>
            <div className='header-c'>
                {/* <Link to='/'>Home</Link> */}
                <Link to='/new-post'>New Entry</Link>
                {/* <Link to='/'>Logout</Link> */}
                {/* <Link to='/'>Search</Link> */}
            </div>
            <div className='header-r'>
                {/* <Link to='/new-post'>New Post</Link> */}
                <Link to='/'>Home</Link>
                {/* Image */}
            </div>
        </div>
    )

}