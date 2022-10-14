const FETCH_LIST = "FETCH_LIST";
const FETCH_LIST_SUCCESS = "FETCH_LIST_SUCCESS";
const FETCH_LIST_ERROR = "FETCH_LIST_ERROR";

const initialState = {
    list: [],
    loading: false,
    error: null,
};

export const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LIST:
            return {loading: true, error: null, list: []};
        case FETCH_LIST_SUCCESS:
            return {loading: false, error: null, list: action.payload};
        case FETCH_LIST_ERROR:
            return {loading: false, error: action.payload, list: []};
        default:
            return state;
    }
};