import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <div className={classes.item}>
                <a>My room</a>
            </div>
            <div className={classes.item}>
                <a>My friends</a>
            </div>
            <div className={classes.item}>
                <a>Activities</a>
            </div>
        </nav>
    );
}

export default Navbar;