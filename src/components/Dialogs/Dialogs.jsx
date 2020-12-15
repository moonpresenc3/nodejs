import React from "react";
import cl from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.state.messages.map((message) => (
    <Message message={message.message} />
  ));

  let newMessagesElement = React.createRef();

  let addMessages = () => {
    let text = newMessagesElement.current.value;
    alert(text);
  };

  return (
    <div className={cl.dialogs}>
      <div className={cl.dialogsItems}>{dialogsElements}</div>
      <div className={cl.messages}>{messagesElements}</div>
      <div>
        <textarea ref={newMessagesElement}></textarea>
      </div>
      <div>
        <button onClick={addMessages}>Add message</button>
      </div>
    </div>
  );
};

export default Dialogs;
