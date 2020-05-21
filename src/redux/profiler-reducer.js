const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState =  {
    posts: [
      {id: 1, massage: 'Привет, прочиай статью про bind!', like: 33, },
      {id: 2, massage: 'Сегодня прочитал документацию по React', like: 29 }
    ],
    newPostText: 'Hi! Write something...'
}

 const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:  
            let newPost = {
            id: 3,
            massage: state.newPostText,
            like: 0
            };
             return {
              ...state,
              posts: [...state.posts, newPost],
              newPostText: ' '
            };
        case UPDATE_NEW_POST_TEXT: 
            return {
          ...state,
          newPostText: action.newText
        }
        default: 
         return state;
    }
}

export const addPostActionCreator = () => ({type : ADD_POST})
export const updateNewPostTextActionCreater = (newText) => ({
  type: UPDATE_NEW_POST_TEXT, newText: newText
});

export default profileReducer;