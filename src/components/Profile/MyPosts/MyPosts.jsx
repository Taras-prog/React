import React from 'react';
import  s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts (props) {

  let postsElements = props.posts.map (post =>  <Post massage={post.massage} like={post.like} key={post.id} />)

  let newPostElement = React.createRef();

  let addNewPost = () => {
    props.addNewPost();
  }
let onPostChange = () => { 
  let newText = newPostElement.current.value; 
  props.updateNewPostText(newText)  
}

  return (
      <div className={s.myPost}>
      <h4>  My posts </h4>
        <div>
          
          <div ><textarea className={s.txt} onChange={onPostChange} ref={newPostElement} value={props.newPostText}/></div>
          <button onClick={addNewPost} className={s.btn_add}>Add post</button>
          </div>
      
      <div className={s.posts}>
     { postsElements }
      </div>
      </div>
  
  )
}

export default MyPosts;