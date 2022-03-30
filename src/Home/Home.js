// ----- Contains sidebar and blog posts
import React from 'react';
import {Route} from 'react-router-dom'
import SideBar from './SideBar';
import Posts from '../posts/Posts';

export default function Home(props) {

    const { posts, handleDelete } = props;

    return (
        <>
            <div id='home'>
                <SideBar
                    posts={posts}
                />
                <Route path="/:blogId">
                    <Posts 
                        posts={posts}
                        handleDelete={handleDelete}
                    />
                </Route>
                <Route exact path="/">
                    <Posts 
                        posts={posts}
                        handleDelete={handleDelete}
                    />
                </Route>

            </div>
        </>
    )
}