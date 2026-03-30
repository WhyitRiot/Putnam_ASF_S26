import React from 'react';
import BlogHeader from "../components/BlogHeader.jsx";
import PostContainer from "../components/PostContainer.jsx";

const BlogPage = () => {
    const style ={
        border: '2px orange solid'
    }
    return (
        <div style={style}>
            <h1>I am the blog page</h1>
            <BlogHeader/>
            <PostContainer></PostContainer>
        </div>
    );
};

export default BlogPage;