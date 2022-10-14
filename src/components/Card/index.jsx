import React from "react";
import classes from "./Card.module.scss";

const Card = ({content}) => {
    const {header, options, text} = content;
    return (
        <div className={classes.card}>
            <h4 className={classes.title}>{header}</h4>
            <ul>{options.map((item, index) => {
                return <li key={`${index}${item}`}>{item}</li>
            })}</ul>
            <div><i>{text}</i></div>
        </div>
    )
};

export default Card;