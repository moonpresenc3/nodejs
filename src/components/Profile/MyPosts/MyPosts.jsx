import React from "react";
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  return (
    <div className={cl.postsBlock}>
      <h2>My Posts</h2>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={cl.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
