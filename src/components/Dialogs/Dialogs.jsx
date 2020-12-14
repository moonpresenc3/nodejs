import React from "react";
import cl from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.messages.map((message) => (
    <Message message={message.message} />
  ));

  return (
    <div className={cl.dialogs}>
      <div className={cl.dialogsItems}>{dialogsElements}</div>
      <div className={cl.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
