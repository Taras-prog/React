import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
function Profile(props) {
  return (
    <div>
      <div>
        <ProfileInfo profile={props.profile} />
        <MyPostsContainer />
      </div>
    </div>
  );
}

export default Profile;
