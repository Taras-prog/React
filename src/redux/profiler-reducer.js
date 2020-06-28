const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState =  {
    posts: [
      {id: 1, massage: 'Привет, прочиай статью про bind!', like: 33, },
      {id: 2, massage: 'Сегодня прочитал документацию по React', like: 29 }
    ],
    newPostText: 'Hi! Write something...',
    profile: null
};

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
        };
        case SET_USER_PROFILE:
          return {
            ...state, 
            profile: action.profile
          };
        default: 
         return state;
    }
}

export const addPostActionCreator = () => ({type : ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateNewPostTextActionCreater = (newText) => ({ type: UPDATE_NEW_POST_TEXT, newText: newText });

export default profileReducer;