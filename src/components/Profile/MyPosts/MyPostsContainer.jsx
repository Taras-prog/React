import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreater } from "../../../redux/profiler-reducer";
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// function MyPostsContainer (props) {

//   return (
//     <StoreContext.Consumer> 
//       {
//      (store) => {
//         let state = store.getState();

//         let addNewPost = () => {   
//           store.dispatch(addPostActionCreator());
//       }
      
//       let onPostChange = (newText) => {
//         let action = updateNewPostTextActionCreater(newText)
//         store.dispatch(action)
//       }

//       return  <MyPosts updateNewPostText={onPostChange} addNewPost={addNewPost} 
//           posts={state.profilePage.posts} 
//           newPostText={state.profilePage.newPostText}/>}
//     }
//     </StoreContext.Consumer>
//   )
// }


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
   
  }
}
let mapDispatchToProps = (dispatch) => { 
  return {
    addNewPost: () => {dispatch(addPostActionCreator());},
    updateNewPostText: (newText) => {let action = updateNewPostTextActionCreater(newText)
      dispatch(action)}
    
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;