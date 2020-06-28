import { sendMassageCreator, updateNewMassageBodyCreater } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
     return {
         dialogsPage: state.dialogsPage
        
     }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMassageBody: (body) => dispatch(updateNewMassageBodyCreater(body)),

        sendMassage:  () =>  dispatch(sendMassageCreator())
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer