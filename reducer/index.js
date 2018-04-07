import { UPDATE_STATUS, updateStauts, UPDATE_PLANETS, updatePlanets, updatePlanetsScount, 
    UPDATE_PLANETS_SCOUNT, UPDATE_PLANETS_SCOUNT_ZERO, UPDATE_AUTHORIZATION } from '../actions';
import {Max_Search_limit} from '../constants';
const initial_state = { authorized: false, name: "", lCount: 0, planets: [], SCount: 0, fetchState: false, restrict: false };
export default (state = { authorized: false, name: "", lCount: 0, planets: [], SCount: 0, fetchState: false, restrict: false }, { type, data }) => {
    switch (type) {
        case UPDATE_STATUS:
            if (data.auth) {
                return { ...state, authorized: data.auth, name: data.name, lCount: state.lCount + 1, fetchState: true }
            } else {
                return { ...state, authorized: data.auth, lCount: state.lCount + 1 }
            }
        case UPDATE_PLANETS:
            return { ...state, planets: [...data], fetchState: false }
        case UPDATE_PLANETS_SCOUNT:
            if(state.SCount+1 >= Max_Search_limit){
                return {...state, SCount: state.SCount + 1, restrict : true}
            }
            return { ...state, SCount: state.SCount + 1 }
        case UPDATE_PLANETS_SCOUNT_ZERO:
            return { ...state, SCount: 0, restrict: false }
        case UPDATE_AUTHORIZATION:
            return initial_state
        default:
            return state
    }
}