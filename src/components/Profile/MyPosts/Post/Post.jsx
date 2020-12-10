import React from 'react';
import cl from'./Post.module.css'

const Post =(props)=>{
    return  <div className={cl.item}>
      <img src='https://pbs.twimg.com/media/EWUvvJuXkAAIHPp.jpg' />
      {props.message}
      <div>
      <span>like</span> {props.likesCount}
      </div>
      </div>

}

export default Post;