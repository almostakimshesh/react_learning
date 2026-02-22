import { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import classes from './Post.module.css';


function NewPost({ onAddPost }) {
  // props.onAddPost(postData);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  function NameHandler(event){
      setName(event.target.value);
  }
    function MeassageHandler(event){
      setMessage(event.target.value);
  }

  function submitHandler(event){
    event.preventDefault();
    const postData = {
      name: name,
      message: message,
    }
    onAddPost(postData);
  }

    return (
      <>
          <Container className="mt-4 mb-4 text-center">
            <Form className={`${classes['post-form']}`} onSubmit={submitHandler}>
              <h1 className={`${classes['form-label']}`}>Post Form</h1><br></br>
                <Form.Group className="mb-3" controlId="formBasicName">
                    {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control className={`${classes["inputOutline"]}`} type="text" placeholder="Enter Name" onChange={NameHandler}/><br></br>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                    {/* <Form.Label>Message</Form.Label> */}
                    <Form.Control className={`${classes["inputOutline"]}`} as="textarea" rows={3} placeholder="Enter your message"  onChange={MeassageHandler}/><br></br>
                </Form.Group>
                <Button variant="danger" type="submit">
                  Submit
                </Button>
            </Form>
          </Container>
    </>
  );
}
export default NewPost;
