// ----- Contains sidebar and blog posts
import React from 'react';
import {Route} from 'react-router-dom'
import SideBar from '../sidebar/SideBar';
import SideBar2 from '../sidebar/SideBar2';
import Posts from '../posts/Posts';
import Footer from '../footer/Footer';


import './home.css'

export default function Home(props) {

    const { posts, handleDelete } = props;

    return (
        <>
            <div id='home'>
                <SideBar2
                    posts={posts}
                />
                <Route path="/:blogId">
                    <Posts 
                        posts={posts}
                        handleDelete={handleDelete}
                        // blogId={blogId}
                    />
                </Route>
                <Route exact path="/">
                    <Posts 
                        posts={posts}
                        handleDelete={handleDelete}
                    />
                </Route>

            </div>
            {/* <Footer /> */}
        </>
    )
}