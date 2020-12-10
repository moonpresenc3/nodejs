import React from 'react';
import cl from'./MyPosts.module.css'
import Post from './Post/Post';

const MyPosts =()=>{
    return <div>
      My Posts
      <div>
      <textarea></textarea>
      <button>Add post</button>
      
      </div>
      <div className={cl.posts}>
        < Post message='Hi,how are you?' likesCount='12' />
        < Post message="It's my first post" likesCount='26' />     
    </div>
    </div>

}

export default MyPosts;