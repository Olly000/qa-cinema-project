import React, { useEffect, useState } from "react";
import CommentForm from './commentForm';
import Post from './Post';


const DiscussionBoard = () => {
    const [comments, setComments] = useState([]);

    //section for comment form and post or use post within comment from component and just comment form here

    useEffect(() => {
        getComments();
    }, []);

    const getComments = () => {
        fetch("http://localhost:4494/discussionBoard/get", { method: 'get'})
        .then(res => res.json())
        .then(res => setComments(res))
        .catch(err => console.log(err));
    }

    return (
        <>
            <h2>Discussion Board</h2>
            <div className='post_container'>

              {  comments.map((post, i) => {
                return (<> <Post key={i} name={post.name} postTitle={post.postTitle.toString()} filmTitle={post.filmTitle.toString()} rating={post.rating} comment={post.comment} />
                <br/><br/></>
                )
            
               })
               }

            </div>
            <div>
                <CommentForm getComments={getComments} />
            </div>
        </>
    )

  
}

export default DiscussionBoard;