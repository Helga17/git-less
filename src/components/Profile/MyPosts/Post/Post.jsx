import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return(
        <div className={classes.item}>
            <img src='https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="" />
            { props.message }
            <div>
                <span>Like</span>{ props.likesCount }
            </div>
        </div>
    );
}

export default Post;