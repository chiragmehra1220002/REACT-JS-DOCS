
import React, { useEffect, useState } from 'react';
import Post from '../components/Post';

const endpoint = "https://fakestoreapi.com/products";

// Posts component
const Posts = () => {
    const [posts, setPosts] = useState(null);
    
    async function fetchPosts() {
        const res = await fetch(endpoint);
        const data = await res.json();
        setPosts(data);
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <>
          
            {posts === null ? (
                <h2>Loading...</h2>
            ) : (
               
                <Post data={posts} />
            )}
        </>
    );
};

export default Posts;
