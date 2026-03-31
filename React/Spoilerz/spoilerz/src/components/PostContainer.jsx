import React from 'react';
import Posts from "./Posts.jsx";
import {postArray} from "../utils/testData.js"

const PostContainer = (props) => {

    let array = postArray.map(e =>{
        return(
            <Posts key={e.id} src={e.src} alt={e.alt} content={e.content}/>
        )
    })
    const style = {
        border: '2px purple solid'
    }
    return (
        <div style={style}>
            <p>I am the post container</p>
            {array}
        </div>
    );
};

export default PostContainer;