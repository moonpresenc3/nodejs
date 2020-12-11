import React from 'react';
import cl from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile =()=>{
    return <div>
    <div>
      <img src="https://w-dog.ru/wallpapers/10/17/541552369303432/ssha-severnaya-amerika-doroga-shosse-razmetka-les-sekvoji-derevya-tuman-priroda.jpg" />
    </div>
    <div>ava + description</div>
    <MyPosts />  
  </div>
}

export default Profile