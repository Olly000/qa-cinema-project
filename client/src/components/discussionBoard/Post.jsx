import React from "react";


const Post = ({ name, postTitle, filmTitle, rating, comment }) => {
    return (
        <div className="post">
           
            <div className="postInfo">
                <h3>{postTitle}</h3>
                <p><strong>Name: </strong>{name}</p>
                <p><strong>Film: </strong>{filmTitle}</p>
                <p><strong>Rating: </strong>{rating}</p>
                <p><strong>Comment: </strong>{comment}</p>
                

            </div>

        </div>
    );

}


export default Post;