import React from "react";
import cl from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://w-dog.ru/wallpapers/10/17/541552369303432/ssha-severnaya-amerika-doroga-shosse-razmetka-les-sekvoji-derevya-tuman-priroda.jpg" />
      </div>

      <div className={cl.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
