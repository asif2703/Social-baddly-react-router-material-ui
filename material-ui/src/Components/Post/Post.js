import React from 'react';
import { Button, borders, Box, Link } from '@material-ui/core';
import Comment from '../Comment/Comment';


const Post = (props) => {
    const { id, title, body } = props.post;
    const postStyle = {
        border: '10px solid DarkCyan',
        borderRadius: '20px',
        margin: '20px',
        padding: '20px',
        marginRight: '10px'
    }

    return (
        <div style={postStyle}>
            <h2>Id: {id}</h2>
            <p><small>Title: {title}</small></p>
            <p>Body: {body}</p>
            <br />
            <Button variant="contained" color="White" >
          See comments  </Button>
          <Comment></Comment>

        </div>
        

    );

};







export default Post;