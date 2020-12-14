import React from "react";
import cl from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dailogs/" + props.id;
  return (
    <div className={cl.dialog + " " + cl.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
