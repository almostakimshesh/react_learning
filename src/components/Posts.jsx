import React from "react";
import { Card } from "react-bootstrap";
import classes from "./Post.module.css";

function Posts({ author, body }) {
  return (
    <Card bg="danger" className={classes.post}>
      <Card.Body>
        <h5 className="text-light">{author}</h5>
        <p className="text-light">{body}</p>
      </Card.Body>
    </Card>
  );
}

export default Posts;
