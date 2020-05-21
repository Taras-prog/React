import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Massage from './Message/Massage';

function Dialogs (props) {
    let state = props.dialogsPage;
    let dialogsElements =  state.dialogs.map (dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let massagesElements = state.massages.map (massage => <Massage massage={massage.massage} key={massage.id}/>);
    let newMassageBody = state.newMassageBody;

    let onSendMassageClick = () => {
        props.sendMassage()
        
    }
    let onNewMassageChange = (e) => {
     let body = e.target.value
     props.updateNewMassageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items} >
                { dialogsElements }              
            </div>
          
            <div className={s.massages}>
                { massagesElements }
            </div>
            <div>
         <textarea placeholder='Enter your massage' value={newMassageBody} onChange={onNewMassageChange} ></textarea>
         <button onClick={onSendMassageClick} className={s.btn_send}>Send massage</button>
            </div>
        
        </div>
    )
}
export default Dialogs