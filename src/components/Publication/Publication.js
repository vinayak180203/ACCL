import React, { useState, useEffect } from 'react';
import Particle from "../Particle";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function PostList() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/papers.md')
      .then(res => res.text())
      .then(text => setContent(text));
  }, []);
  
  return (
    <div className="blog-section min-h-screen flex flex-col items-center p-10">
      <Particle />
      <div className="w-full max-w-4xl p-6 bg-transparent rounded-lg shadow-md text-left" style={{ boxShadow: '0 4px 5px 3px rgba(119, 53, 136, 0.459)' }}>
        <h1 className="text-3xl font-bold mb-6">Publications</h1>
        <div className="markdown-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
    // <div className="blog-section min-h-screen flex flex-col items-center py-10 px-10">
    //   <Particle />
    //   <div className="w-full max-w-4xl p-6 bg-transparent rounded-lg shadow-md" style={{ boxShadow: '0 4px 5px 3px rgba(119, 53, 136, 0.459)' }}>
    //     <h1 className="text-3xl font-bold mb-4">Blog <span style={{ color: "#c770f0"}}>Posts</span></h1>
    //     <ul className="list-disc pl-5 text-left">
    //       {blogs.map((blog, index) => (
    //         <li key={index} className="mb-2">
    //           {console.log(`/blogs/${blog.path}`)}
    //           <span 
    //             style={{ textDecoration: "none", color: "white", cursor: "pointer" }}
    //             onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
    //             onMouseLeave={(e) => e.target.style.textDecoration = "none"}
    //             onClick={() => handleClick(blog.path)}
    //           >
    //             {blog.title}
    //           </span>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
  );
};

export default PostList;