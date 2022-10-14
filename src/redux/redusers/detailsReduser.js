const FETCH_DETAILS = "FETCH_DETAILS";
const FETCH_DETAILS_SUCCESS = "FETCH_DETAILS_SUCCESS";
const FETCH_DETAILS_ERROR = "FETCH_DETAILS_ERROR";

const initialState = {
    details: {},
    loading: false,
    error: null,
};

export const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DETAILS:
            return {loading: true, error: null, details: []};
        case FETCH_DETAILS_SUCCESS:
            return {loading: false, error: null, details: action.payload};
        case FETCH_DETAILS_ERROR:
            return {loading: false, error: action.payload, details: {}};
        default:
            return state;
    }
};