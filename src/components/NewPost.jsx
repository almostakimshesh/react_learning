import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classes from './Post.module.css';
import {useState} from 'react';

function NewPost() {
  const [body, setBody] = useState('');
  function changeBodyHandler(event) {
    setBody(event.target.value);
  }
  const [email, setEmail] = useState('');
  function changeEmailHandler(event) {
    setEmail(event.target.value);
  }
  return (
    <Container className={`${classes['post-container']}`}>
      <Form className={`${classes['post-form']}`}>
        <h1 className={`${classes['form-label']}`}>Post Form</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control className={`${classes.inputOutline}`} type="email" placeholder="Enter email" onChange={changeEmailHandler}/>
                <p>{email}</p>
            </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
              {/* <Form.Label>Message</Form.Label> */}
              <Form.Control className={`${classes.inputOutline}`} as="textarea" rows={3} placeholder="Enter your message"  onChange={changeBodyHandler}/>
              <p>{body}</p>
          </Form.Group>
          <Button variant="danger" type="submit">
            Submit
          </Button>
      </Form>
    </Container>
  );
}

export default NewPost;