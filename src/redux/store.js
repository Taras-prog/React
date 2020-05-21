// import profileReducer from "./profiler-reducer";
// import dialogsReducer from "./dialogs-reducer";
// import sidebarReducer from "./sidebar-reducer";

// let store = {
//   _state: {

//    profilePage: {
       
//          posts: [
//            {id: 1, massage: 'Привет, прочиай статью про bind!', like: 33, },
//            {id: 2, massage: 'Сегодня прочитал документацию по React.js', like: 29 }
//          ],
//          newPostText: 'Hi! Write something...'
//    },

//    dialogsPage: {


//    massages: [
//      {id: 1, massage: 'Что бы в воскресенье антивирус был установлен!'},
//      {id: 2, massage: 'Купи гель для душа по акции ( не дороже 25 грн)'},
//      {id: 3, massage: 'Ok.Good evening!'},
//      {id: 4, massage:  'Привіт.Ти вже свою курсову доопрацював?'},
//      {id: 5, massage: 'Ты где ? Еще на работе?'},
//      {id: 6, massage: 'Привет. Что делаете?'},
//      {id: 7, massage: 'Может тебе не стоит ехать к своим'},
//      {id: 8, massage: 'В сша куча больных а школы работают'},
//      {id: 9, massage: 'Дашь 800 грн на абонемент?'}
//  ],
//   newMassageBody: '',

//  dialogs: [
//    {id: 1, name: 'Taras'},
//    {id:2, name: 'Dasha'},
//    {id:3, name: 'Olga'},
//    {id:4, name: 'Sonya'},
//    {id:5, name: 'Alex'},
//    {id:6, name: 'Lena'},
//    {id:7, name: 'Valera'},
//    {id:8, name: 'Lev'},
//    {id:9, name: 'Galya'}
//  ],
// },
//   sidebar: {}

// },
//   _callSubscriber () {
//   console.log('State changed');
 
//  },
//   getState() {
//   return(this._state)
// },
//   subscribe (observer)  {
//   this._callSubscriber = observer;
//  },
//   dispatch (action) {
//     this._state.profilePage = profileReducer( this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//     this._callSubscriber(this._state);
//     }
//   }

//  export default store;
//  window.state = store;