import { call, put, all, takeEvery } from 'redux-saga/effects';
import { checkCredentials, CHECK_CREDENTIALS ,UPDATE_STATUS, updateStauts, updatePlanets} from '../actions';
import { loadUsers, loadPlanets, planetServiceCall } from '../api';
export default function* sntSaga() {
    yield takeEvery(CHECK_CREDENTIALS, getUsers)
}

export function* getUsers(request) {
    try {
        console.log(request.data)
        const data = yield call(loadUsers.bind(null, request));
        const bool = yield checkUser(data,request);
        yield put(updateStauts({auth:bool,name:request.data.name}));
        if(bool){
            let results = [];
            let planets = yield call(loadPlanets);
            //console.log(planets);
            while(planets.count > results.length){
                results.push(...planets.results);
                if(planets.next){
                    yield put(updatePlanets(results));
                    planets = yield call(planetServiceCall.bind(null, planets.next));
                }
            }
            
        }
    } catch (e) {
        console.log(e);
    }
}
function checkUser(data ,request){
    console.log(data)
    if(data.results.length === 0)
        return false
    var bool =  false;
    data.results.forEach((obj) => {
        if(request.data.name === obj.name && request.data.password === obj.birth_year)
            bool = true;
    })
    return bool;
}
