import axios from "axios";
import { useState } from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const CommentForm = ({ handleCreatePost }) => {
    const [name, setName] = useState("Anonymous");
    const [postTitle, setPostTitle] = useState("");
    const [filmName, setFilmName] = useState("");
    const [rating, setRating] = useState("");
    const [comment, setComment] = useState("");

    const correctInput = (e) => {

        if (name.length <= 0 || postTitle.length <= 0 || comment.length <= 0) {
            alert("Please fill in required fields.");
            e.preventDefault();
            return false;
        }
        return true;
    }

    function handleSubmit(e) {

        if(correctInput(e)){
            const userInput = {
                "name": name,
                "postTitle": postTitle,
                "filmName": filmName,
                "rating": rating,
                "comment": comment
            };

            setName("Anonymous");
            setPostTitle("");
            setFilmName("");
            setRating(0);
            setComment("");
            handleCreatePost(userInput);




        //     axios.post('http://localhost:27017/cinema_db/discussionboards', {body}).then(res => res.json()).then(data => console.log(data));
    };

    function handleCreatePost (input) {

        fetch(`http://localhost:4494/discussionBoard/post`, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                name: `${name}`,
                postTitle: `${postTitle}`,
                filmTitle: `${filmName}`,
                rating: `${rating}`,
                comment: `${comment}`
            })
        })
        .then((response) => console.log(response.status))
        .catch(err => console.log(err));
    }

}
return (
        <>
        <Form className="comment-form" onSubmit={handleSubmit}>
            <FormGroup row>
                <Label for="name" >Name</Label>
                <Col>
                    <Input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="postTitle">Title of Post</Label>
                <Col>
                    <Input placeholder="enter text here" type="text" name="postTitle" id="postTitle" value={postTitle} onChange={(e) => setPostTitle(e.target.value)} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="FilmName">Name of Film</Label>
                <Col>
                    <Input placeholder="enter text here" type="text" name="FilmName" id="FilmName" value={filmName} onChange={(e) => setFilmName(e.target.value)} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="Rating">Rating</Label>
                <Col>
                    <Input placeholder="enter text here" type="text" name="Rating" id="Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="Comment">Comments</Label>
                <Col>
                    <textarea placeholder="enter text here" name="Comment" id="Comment" rows="12" cols="36" value={comment} onChange={(e) => setComment(e.target.value)} />
                </Col>
            </FormGroup>

            <button onClick={handleSubmit}>Submit</button>
            </Form>

        </>
        )
}

export default CommentForm;