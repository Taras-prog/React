import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

function ProfileInfo(props) {
  if(!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
      <div>
      <img
        className={s.mainImg}
        src="https://previews.123rf.com/images/maytheevoran/maytheevoran1706/maytheevoran170600116/80415421-switzerland-landscape-lake-geneva-of-montreux-at-sunrise.jpg"
        alt="main"
      ></img>
      </div>

      <div className={s.ava_block}> 
      <img src={props.profile.photos.small} alt="User photos"/> 
                ava + description
      </div>
    </div>
   
  );
}
export default ProfileInfo;
