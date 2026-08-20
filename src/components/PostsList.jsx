import { useEffect, useState } from "react";
import NewPost from "./NewPost";
import React from "react";
import Posts from "./Posts";
import classes from "./Post.module.css";
import { Container } from "react-bootstrap";
function PostsList() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('http://localhost:8080/posts');
      const responseData = await response.json();
      setPosts(responseData.posts);
    }
    fetchPosts();
  }, []);

  function addPostHandler(postData){
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    });
    setPosts(existingPosts => [postData, ...existingPosts]);

  }
    return (
      <Container>
        <main className={`${classes["mainSection"]}`}>
            <ul>
                <NewPost onAddPost={addPostHandler} />
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
