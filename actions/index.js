export const CHECK_CREDENTIALS = "CHECK_CREDENTIALS";
export const checkCredentials = data => ({type: CHECK_CREDENTIALS, data});

export const UPDATE_STATUS = "UPDATE_STATUS";
export const updateStauts = data => ({type: UPDATE_STATUS, data});

export const UPDATE_PLANETS = "UPDATE_PLANETS";
export const updatePlanets = data => ({type: UPDATE_PLANETS, data});

export const SEARCH_PLANETS = "SEARCH_PLANETS";
export const searchPlanets = data => ({type: SEARCH_PLANETS, data});

export const SEARCH_PLANETS_RESULTS = "SEARCH_PLANETS_RESULTS";
export const searchPlanetsResults = data => ({type: SEARCH_PLANETS_RESULTS, data});

export const UPDATE_PLANETS_SCOUNT = "UPDATE_PLANETS_SCOUNT";
export const updatePlanetsScount = data => ({type: UPDATE_PLANETS_SCOUNT, data});

export const UPDATE_PLANETS_SCOUNT_ZERO = "UPDATE_PLANETS_SCOUNT_ZERO";
export const updatePlanetsScount0 = () => ({type: UPDATE_PLANETS_SCOUNT_ZERO});

export const UPDATE_AUTHORIZATION = "UPDATE_AUTHORIZATION";
export const updateAuth = data => ({type: UPDATE_AUTHORIZATION, data});