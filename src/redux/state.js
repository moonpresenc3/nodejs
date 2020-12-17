let store = {
  _state: {
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
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State was changed");
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.store = store;
