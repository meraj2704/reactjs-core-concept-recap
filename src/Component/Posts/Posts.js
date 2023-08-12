import React from 'react';
import './Posts.css'

const Posts = props => {
    const {userId, title, body} = props.post;
    return (
        <div  className='post'>
            <h5>{userId}</h5>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    );
};

export default Posts;