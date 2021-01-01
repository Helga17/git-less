import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return(
        <header className={classes.header}>
            <img src='https://raisingcodeblog.com/wp-content/uploads/2019/03/whale-from-docker-logo-small-min.png' alt="" />
        </header>
    );
}

export default Header;