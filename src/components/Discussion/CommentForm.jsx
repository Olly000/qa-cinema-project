import { useState } from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const CommentForm = ({ handleCreatePost }) => {
    const [name, setName] = useState("Anonymous");
    const [postTitle, setPostTitle] = useState("");
    const [filmName, setFilmName] = useState("");
    const [rating, setRating] = useState("");
    const [comment, setComment] = useState("");

    const correctInput = () => {

        if (name === "" || postTitle.length <= 0 || comment.length <= 0) {
            alert("Please fill in required fields.");
            return false;
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    if(correctInput()){
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
        setRating("");
        setComment("");
        handleCreatePost();
    };

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
                    <Input placeholder="enter text here" type="text" name="Comment" id="Comment" value={Comment} onChange={(e) => setComment(e.target.value)} />
                </Col>
            </FormGroup>

            <Button>Submit</Button>
            </Form>

        </>
        )


}

export default CommentForm;
