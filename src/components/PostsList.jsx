import React from "react";
import Posts from "./Posts";
import classes from "./Post.module.css"; // can use same module for simplicity
import NewPost from "./NewPost";
import { useState } from "react";

function PostsList() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  function NameHandler(event){
      setName(event.target.value);
  }
    function MeassageHandler(event){
      setMessage(event.target.value);
  }
  return (
    <main className={`${classes["mainSection"]}`}>
        <ul>
            <NewPost OnMessageChange={MeassageHandler} OnNameChange={NameHandler}/>
        </ul>
        <ul className={`${classes["postsWrapper"]}`}>
            <Posts author={name} body={message} />
            <Posts author="Author 2" body="This is the body of Post 2" />
        </ul>
    </main>
  );
}

export default PostsList;
