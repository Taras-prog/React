import preloader from '../../../assets/images/preloader.gif'
import s from './Preloader.module.css'
import React from 'react';


function Preloader (props) {
    return <img className={s.preloader} src={preloader} alt='Loading'/>
};

export default Preloader;