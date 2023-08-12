import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';
import './LoadPost.css'

const LoadPost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])

    return (
        <div>
            <h1>Post Length : {posts.length}</h1>
            <div>
                {
                    posts.map(post => <Posts 
                    post={post}
                    key ={post.id}
                    ></Posts>)
                }
            </div>
        </div>
    );
};

export default LoadPost;