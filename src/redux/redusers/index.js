import {combineReducers} from "redux";
import {listReducer} from "./listReduser";
import {detailsReducer} from "./detailsReduser";

export const rootReducer = combineReducers({
    list: listReducer,
    details: detailsReducer
});