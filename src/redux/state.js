import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi,how are you?", likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 26 },
    ],
  },
  dialogsPage: {
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are" },
      { id: 3, message: "You man" },
    ],
    dialogs: [
      { id: 1, name: "Ivan" },
      { id: 2, name: "Dmitry" },
      { id: 3, name: "Stas" },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export default state;
