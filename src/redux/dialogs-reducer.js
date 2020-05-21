
const UPDATE_NEW_MASSAGE_BODY = 'UPDATE-NEW-MASSAGE-TEXT';
const SEND_MASSAGE = 'SEND-MASSAGE';

let initialState =  {
    massages: [
      {id: 1, massage: 'Old unsatiable our now but considered travelling impression. In excuse hardly summer in basket misery.'},
      {id: 2, massage: 'Oh shutters do removing reserved wandered an.'},
      {id: 3, massage: 'Pianoforte reasonable as so am inhabiting.'},
      {id: 4, massage:  'Any nay pleasure entrance prepared her. '},
      {id: 5, massage: 'Dwelling and speedily ignorant any steepest. '},
      {id: 6, massage: 'Likewise proposal differed scarcely dwelling as on raillery.'},
      {id: 7, massage: 'Answer him easily are its barton little. '},
      {id: 8, massage: 'My solid by stuff first smile fanny.'},
      {id: 9, massage: 'Off into she bed long fat room.'}
  ],
   newMassageBody: '',
 
  dialogs: [
    {id: 1, name: 'Taras'},
    {id:2, name: 'Dasha'},
    {id:3, name: 'Olga'},
    {id:4, name: 'Tom'},
    {id:5, name: 'Alex'},
    {id:6, name: 'Max'},
    {id:7, name: 'Alan'},
    {id:8, name: 'Lev'},
    {id:9, name: 'Dean'}
  ],
 }

 const dialogsReducer = (state = initialState, action) => {
          
   
        switch(action.type) {
            case UPDATE_NEW_MASSAGE_BODY: 
              return {
                ...state,
                newMassageBody: action.body
              };
        
            case SEND_MASSAGE: 
              let body = state.newMassageBody;
              return {
                ...state,
                newMassageBody: '',
                massages: [...state.massages, {id: 10, massage: body}]
              };
            default:
                return state
        }
}

export const sendMassageCreator = () => ({type: SEND_MASSAGE})
export const updateNewMassageBodyCreater = (body) => ({
  type: UPDATE_NEW_MASSAGE_BODY, body: body
})
export default dialogsReducer;