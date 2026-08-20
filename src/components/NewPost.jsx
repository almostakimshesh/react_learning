import {Nav,Navbar,Container, Row, Col, Button, Card } from "react-bootstrap";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import classes from './Post.module.css';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2'

function NewPost({ onAddPost }) {
 const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Handle input changes
  const NameHandler = (e) => setName(e.target.value);
  const MessageHandler = (e) => setMessage(e.target.value);

  function submitHandler(e) {
    e.preventDefault();
    const postData = {
      name: name,
      message: message,
    };
    handleClose();
    onAddPost(postData);

  }



  // Submit to WordPress
  // const submitHandler = async (e) => {
  //   e.preventDefault();

  //   const postData = {
  //     name,
  //     message,
  //   };

  //   try {
  //     const response = await fetch(
  //       "http://localhost/testing_wordpress/wp-json/react-app/v1/submit-data",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(postData),
  //       }
  //     );

  //     const data = await response.json();
  //     if (data.success) {
  //       Swal.fire({
  //         title: "Data Saved Successfully!",
  //         icon: "success"
  //       });
  //       setName("");
  //       setMessage("");
  //       handleClose();
  //     } else {
  //       alert("Error saving data.");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     alert("Network error.");
  //   }
  // };

    return (
      <>
      <Navbar bg="danger" data-bs-theme="dark" style={{borderRadius:"05px"}}>
        <Container>
          <Navbar.Brand href="#home">
            React Bootstrap
          </Navbar.Brand>

          <Nav>
            <Button variant="outline-light" onClick={handleShow}>
              React Modal Form
            </Button>
          </Nav>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
          <Container className="mt-4 mb-4 text-center">
            <Form className={`${classes['post-form']}`} onSubmit={submitHandler}>
              <h1 className={`${classes['form-label']}`}>Post Form</h1><br></br>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control className={`${classes["inputOutline"]}`} type="text" placeholder="Enter Name" onChange={NameHandler}/><br></br>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Control className={`${classes["inputOutline"]}`} as="textarea" rows={3} placeholder="Enter your message"  onChange={MessageHandler}/><br></br>
                </Form.Group>
                <Button variant="danger" type="submit">
                  Submit
                </Button>
            </Form>
          </Container>
      </Modal>
    </>
  );
}
export default NewPost;
