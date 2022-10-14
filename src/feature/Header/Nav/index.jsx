import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.scss";

const setActive = ({ isActive }) => isActive ? `${classes.hvrFloatShadow} ${classes.active}` : classes.hvrFloatShadow;

const Nav = () => {
    return (
        <nav>
            <ul className={classes.ul}>
                <li>
                    <NavLink to="/" className={setActive}>Главная</NavLink>
                </li>
                <li>
                    <NavLink to="/cards" className={setActive}>Карточки</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;