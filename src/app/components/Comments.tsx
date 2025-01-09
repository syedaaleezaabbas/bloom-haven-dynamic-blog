'use client'
import React, { useState, useEffect } from 'react';

const Comments = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  // Load comments from localStorage on initial render
  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Function to add a new comment
  const addComments = () => {
    if (comment.trim() !== '') {
      const updatedComments = [...comments, comment];
      setComments(updatedComments);
      setComment('');
      localStorage.setItem('comments', JSON.stringify(updatedComments)); // Save to localStorage
    }
  };

  return (
    <div>
      <h1 className="md:text-xl text-lg font-bold mt-8 text-pink-500">Comment Box</h1>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add your comment"
        className="border-2 border-purple-500 mt-4 rounded-lg w-full md:p-3 p-2 focus:outline-none focus:shadow-lg" 
      />
      <br />
      <button
        className="bg-pink-500 md:text-lg hover:bg-pink-600 border-2 border-pink-700 text-white rounded-lg md:px-8 px-4 py-2 mt-6"
        onClick={addComments}
      >
        Add Comment
      </button>
      <div className="mt-2">
        <h2 className='text-pink-500 font-semibold md:text-lg mt-6'>All Comments:</h2>
        {comments.length === 0 ? (
          <p>No comments yet. Add your comment!</p>
        ) : (
          <ul>
            {comments.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Comments;