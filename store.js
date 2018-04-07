import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer/";
import sntSaga from "./sagas/";


const sagaMiddleware = createSagaMiddleware();

export default createStore(reducer, applyMiddleware(sagaMiddleware));


sagaMiddleware.run(sntSaga);