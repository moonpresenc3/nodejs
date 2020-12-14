let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi,how are you?", likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 26 },
    ],
  },
  messagesPage: {
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

export default state;
