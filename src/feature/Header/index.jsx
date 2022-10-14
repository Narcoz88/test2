import React from "react";
import classes from "./Header.module.scss";
import Nav from "./Nav";

const Header = () => {
    return (
        <header className={classes.Header}>
            <div className='container'>
                <div className={classes.headerWrap}>
                    <Nav />
                </div>
            </div>
        </header>
    );
};

export default Header;