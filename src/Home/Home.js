// ----- Contains sidebar and blog posts
import React from 'react';
import SideBar from '../sidebar/SideBar';
import Posts from '../posts/Posts';
import NewPost from '../posts/NewPost';
import Footer from '../footer/Footer';


import './home.css'

export default function Home(props) {

    const { posts, handleDelete } = props;

    return (
        <>
            <div id='home'>
                <SideBar />
                <Posts 
                    posts={posts}
                    handleDelete={handleDelete}
                />
            </div>
            <Footer />
        </>
    )
}