import React, { useState, useEffect } from 'react';
import { useNavigate, Link  } from 'react-router-dom';
import Particle from "../Particle";

function PostList() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(`/blogs/${path}`);
  };

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
    <div className="blog-section min-h-screen flex flex-col items-center py-10 px-10">
      <Particle />
      <div className="w-full max-w-4xl p-6 bg-transparent rounded-lg shadow-md" style={{ boxShadow: '0 4px 5px 3px rgba(119, 53, 136, 0.459)' }}>
        <h1 className="text-3xl font-bold mb-4">Blog <span style={{ color: "#c770f0"}}>Posts</span></h1>
        <ul className="list-disc pl-5 text-left">
          {blogs.map((blog, index) => (
            <li key={index} className="mb-2">
              {console.log(`/blogs/${blog.path}`)}
              <span 
                style={{ textDecoration: "none", color: "white", cursor: "pointer" }}
                onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
                onMouseLeave={(e) => e.target.style.textDecoration = "none"}
                onClick={() => handleClick(blog.path)}
              >
                {blog.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    // <div className='blog-section'>
    //   <Particle />
    //   <h1 className='blog-heading'>Blog Posts</h1>
    //   <ul>
    //     {blogs.map((blog, index) => (
    //       <li key={index}>
    //         {console.log(`/blogs/${blog.path}`)}
    //       <button onClick={() => navigate(`/blogs/${blog.path}`)}>{blog.title}</button>
    //       {/* <Link to={`/blogs/${blog.path}`}>{blog.title}</Link> */}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default PostList;