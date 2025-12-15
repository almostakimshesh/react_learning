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
            <Posts author="Author 3" body="This is the body of Post 3" />
            <Posts author="Author 4" body="This is the body of Post 4" />
            <Posts author="Author 5" body="This is the body of Post 5" />
            <Posts author="Author 6" body="This is the body of Post 6" />
        </ul>
    </main>
  );
}

export default PostsList;
