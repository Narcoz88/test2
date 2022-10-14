import {takeEvery, put, call, fork, all} from "redux-saga/effects";
import axios from "axios";


const getList = async() => {
    const request = await axios.get(`http://localhost:7070/api/services`);
    return request;
};

const getDetails = async(id) => {
    const request = await axios.get(`http://localhost:7070/api/services/${id}`);
    return request;
};

export function* workerSagaList() {
    try {
        yield put({type: "FETCH_LIST"});
        const data = yield call(getList);
        yield put({type: "FETCH_LIST_SUCCESS", payload: data.data});
    } catch (e) {
        yield put({type: "FETCH_LIST_ERROR", payload: e.message});
    }
}

export function* workerSagaDetails(action) {
    try {
        yield put({type: "FETCH_DETAILS"});
        const data = yield call(getDetails, action.payload);
        yield put({type: "FETCH_DETAILS_SUCCESS", payload: data.data});
    } catch (e) {
        yield put({type: "FETCH_DETAILS_ERROR", payload: e.message});
    }
}

export function* watchListSaga() {
    yield takeEvery("LOAD_SERVICE_LIST", workerSagaList);
}

export function* watchDetailsSaga() {
    yield takeEvery("LOAD_DESCRIPTION", workerSagaDetails);
}

export default function* rootSaga() {
    yield all([
        fork(watchListSaga),
        fork(watchDetailsSaga)
    ])
}