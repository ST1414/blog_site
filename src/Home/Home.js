// ----- Contains sidebar and blog posts
import React from 'react';
import SideBar from '../sidebar/SideBar';
import Posts from '../posts/Posts';
import Footer from '../footer/Footer';


import './home.css'

export default function Home(props) {

    const { posts } = props;

    // -----
    return (
        <>
            <div id='home'>
                <SideBar />
                <Posts posts={posts}/>
            </div>
            <Footer />
        </>
    )
}