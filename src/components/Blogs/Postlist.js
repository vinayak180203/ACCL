import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Particle from "../Particle";

function PostList(){
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
      // Dynamically load all Markdown files from the posts directory
      const context = require.context('./blogs', false, /\.md$/);
      const postFiles = context.keys().map((key) => ({
        path: key.replace('./', '').replace('.md', ''),
        title: key.replace('./', '').replace('.md', '').replace(/-/g, ' '),
      }));
      setBlogs(postFiles);
    }, []);
  
    return (
      <div className='blog-section'>
        <Particle />
        <h1 className='blog-heading'>Blog Posts</h1>
        <ul>
          {blogs.map((blog, index) => (
            <li key={index}>
              {console.log(`/blogs/${blog.path}`)}
            <button onClick={() => navigate(`/blogs/${blog.path}`)}>{blog.title}</button>
            {/* <Link to={`/blogs/${blog.path}`}>{blog.title}</Link> */}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default PostList;