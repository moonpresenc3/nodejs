let rerenderEntireTree = () => {
  console.log("State was changed");
};

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi,how are you?", likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 26 },
    ],
    newPostText: "demo",
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

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree();
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree();
};
export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
