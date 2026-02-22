import { use, useState } from "react";
import NewPost from "./NewPost";
import React from "react";
import Posts from "./Posts";
import classes from "./Post.module.css";
function PostsList() {

  const [posts, setPosts] = useState([]);

  function addPostHandler(postData){
    setPosts(existingPosts => [postData, ...existingPosts]);
  }
  //   function MeassageHandler(event){
  //     setMessage(event.target.value);
  // }
    return (
      <main className={`${classes["mainSection"]}`}>
          <ul>
              {/* <NewPost OnMessageChange={MeassageHandler} OnNameChange={NameHandler}/> */}
              <NewPost onAddPost={addPostHandler}/>
          </ul>
          <ul className={`${classes["postsWrapper"]}`}>
              {/* <Posts author={name} body={message} /> */}
              {posts.map((post) => (<Posts key={post.message} author={post.name} body={post.message} />))}
          </ul>
      </main>
    );
}
export default PostsList;
