// ----- Contains sidebar and blog posts
import React from 'react';
import SideBar from '../Sidebar/Sidebar';
import Posts from '../Posts/Posts'

export default function Home() {

    return (
        <div id='home'>
            Home.js
            <SideBar />
            <Posts/>
        </div>
    )
}