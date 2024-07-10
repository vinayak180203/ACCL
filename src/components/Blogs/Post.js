import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Particle from '../Particle';
import { useParams, useNavigate } from 'react-router-dom';

function Post(){
    const { postId } = useParams(); // Use useParams to get postId from URL params
    const [content, setContent] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate hook
  
    useEffect(() => {
      import(`./blogs/${postId}.md`)
        .then((res) => fetch(res.default))
        .then((res) => res.text())
        .then((res) => setContent(res));
    }, [postId]);

    function backToPosts(){
        console.log("hi");
        navigate('/postlist');
    }
  
    return (
      <div className='blog'>
        <Particle />
        <button onClick={backToPosts}>Back to Posts</button>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    );
  };

export default Post;