import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import classes from "./Main.module.scss";

const MainPage = () => {
    const { list, loading, error } = useSelector(store => store.list);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: "LOAD_SERVICE_LIST"});
    }, [dispatch]);
    const addSpace = (number) => {
        let price = String(number);
        price = price.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ');
        return price;
    };
    return (
        <div>
            <h1>Главная</h1>
            <h3>Список услуг нашей мастерской:</h3>
            {error && (
                <div className="alert alert-danger" role="alert">
                    <span>Произошла ошибка! </span>
                    <button type="button" className="btn btn-secondary col" onClick={() => dispatch({type: "LOAD_SERVICE_LIST"})}>Повторить запрос</button>
                </div>
            )}
            {loading && (
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                )
            }
            <div className={classes.wrapList}>
                {
                    list.map(item => {
                        return <div key={item.id}>
                            <hr/>
                            <Link to={`/${item.id}/details`}>{item.name}<b>{addSpace(item.price)}р.</b></Link>
                        </div>
                    })
                }
            </div>

        </div>
    )
};

export default MainPage;