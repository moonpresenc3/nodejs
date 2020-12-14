import React from "react";
import cl from "./Dialogs.module.css";

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Ivan" },
    { id: 2, name: "Dmitry" },
    { id: 3, name: "Stas" },
  ];

  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are" },
    { id: 3, message: "You man" },
  ];

  let dialogsElements = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = messagesData.map((message) => (
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
