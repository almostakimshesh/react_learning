import { use, useState } from "react";
// import {Nav,Navbar,Container, Row, Col, Button, Card } from "react-bootstrap";
import NewPost from "./NewPost";
import React from "react";
import Posts from "./Posts";
import classes from "./Post.module.css";
import { Container } from "react-bootstrap";
function PostsList() {

  const [posts, setPosts] = useState([]);

  function addPostHandler(postData){
    setPosts(existingPosts => [postData, ...existingPosts]);
  }
  //   function MeassageHandler(event){
  //     setMessage(event.target.value);
  // }
    return (
      <Container>
        <main className={`${classes["mainSection"]}`}>
            <ul>
                <NewPost onAddPost={addPostHandler}/>
            </ul>
            <hr/>
            {posts.length >0 &&(
              <div className={`${classes["postsSection"]}`}>
                <ul className={`${classes["postsWrapper"]}`} >
                    {posts.map((post) => (<Posts key={post.message} author={post.name} body={post.message} />))}
                </ul>
              </div>
            )}
            {posts.length === 0 &&( 
              <h2 style={{textAlign:"center"}}>No posts yet.</h2>
            )}

        </main>
      </Container>
    );
}
export default PostsList;
