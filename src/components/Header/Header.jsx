import React from "react";
import Logo from '../../assets/images/Logo.svg';
import Avatar from '../../assets/images/Avatar.svg';
import classes from './Header.module.css';


function Header(){
    return(
        <header>
            <div><img className={classes.logo} src={Logo} alt="logo"/></div>
            <div className={classes.user}>Name Surname<span>
                <img className={classes.icon} src={Avatar} alt={""}/></span>
            </div>
        </header>
    )
}

export default Header;