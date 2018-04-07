import { URL_People, URL_Planets, URL_People_Search } from '../constants';
export const loadUsers = async(req) =>{
    try {
        const response = await fetch(`${URL_People_Search}${req.data.name}`);
        //const response = await fetch(`${URL_Planets}`);
        const data = await response.json();
        return data;
    } catch (e) {
        console.error('loading users failed: ', e);
    }
}

export const loadPlanets = async() =>{
    try {
        //const response = await fetch(`${URL_People_Search}${req.data.name}`);
        let results = [];
        let data = await planetServiceCall(URL_Planets);

        //debugger;
        return data;
    } catch (e) {
        console.error('loadPlanets failed: ', e);
    }
}

export const planetServiceCall = async(url) =>{
    try {
        const response = await fetch(`${url}`);
        const data = await response.json();
        return data;
    } catch (e) {
        console.error('planetServiceCall failed: ', e);
    }
}