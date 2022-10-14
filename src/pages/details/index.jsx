import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const DetailsPage = () => {
    const { details, loading, error } = useSelector(store => store.details);
    let price = String(details.price);
    price = price.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ');
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(() => {
        dispatch({type: "LOAD_DESCRIPTION", payload: id});
    }, [dispatch, id]);
    return (
        <div>
            <h1>Детали услуги</h1>
            {error && (
                <div className="alert alert-danger" role="alert">
                    <span>Произошла ошибка! </span>
                    <button type="button" className="btn btn-secondary col" onClick={() => dispatch({type: "LOAD_DESCRIPTION", payload: id})}>Повторить запрос</button>
                </div>
            )}
            {loading && (
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )
            }
            {details?.name && (
                <h3>{details.name}</h3>
            )}
            {details?.content && (
                <div>{details.content}</div>
            )}
            {details?.price && (
                <div>Стоимость услуги - <b>{price}р.</b></div>
            )}
        </div>
    )
};

export default DetailsPage;