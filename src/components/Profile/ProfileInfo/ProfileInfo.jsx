import React from "react";
import s from "./ProfileInfo.module.css";

function ProfileInfo() {
  return (
    <div>
      <img
        className={s.mainImg}
        src="https://previews.123rf.com/images/maytheevoran/maytheevoran1706/maytheevoran170600116/80415421-switzerland-landscape-lake-geneva-of-montreux-at-sunrise.jpg"
        alt="main"
      ></img>
      <div className={s.ava_block}> ava + description</div>
    </div>
  );
}
export default ProfileInfo;
