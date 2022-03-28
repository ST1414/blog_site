import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'

export default function Header() {

    return (
        <div id='header'>
            <div className='header-l'>
                My Blog Site
            </div>
            <div className='header-c'>
                Search Bar
            </div>
            <div className='header-r'>
                <Link to='/'>Home</Link>
            </div>
        </div>
    )

}