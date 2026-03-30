import React from 'react';

const Posts = (props) => {
    const {src, alt, content, date} = props;
    const style = {
        border: "2px white solid"
    }
    return (
        <div style={style}>
            <img src={src} alt={alt}/>
            <p>{date}</p>
            <p>{content}</p>
            <div>
                <button>Like</button>
                <button>Dislike</button>
            </div>
            <div>
                <button>Comment</button>
            </div>
        </div>
    );
};

export default Posts;