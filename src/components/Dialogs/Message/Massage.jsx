import React, { Fragment } from 'react';
import s from "./../Dialogs.module.css"



function Massage(props) {
    return (
        <Fragment>
     <div className={s.massage}>{props.massage}
     </div>      
        </Fragment>  
     )
}
export default Massage;