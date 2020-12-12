import React from "react";
import cl from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dailogs/" + props.id;
  return (
    <div className={cl.dialog + " " + cl.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={cl.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Ivan" },
    { id: 2, name: "Dmitry" },
    { id: 3, name: "Stas" },
  ];
  let messagesData = [
    { id: 1, massage: "Hi" },
    { id: 2, massage: "How are" },
    { id: 3, massage: "You man" },
  ];

  return (
    <div className={cl.dialogs}>
      <div className={cl.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
      </div>
      <div className={cl.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
      </div>
    </div>
  );
};

export default Dialogs;
