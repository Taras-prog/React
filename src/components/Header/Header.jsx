import React from "react";
import s from './Header.module.css';


function Header () {
    return (
        <header className={s.header}>
        <img src="https://bower.io/img/bower-logo.png" alt="logo"></img>
      </header>
    )
}
export default Header;