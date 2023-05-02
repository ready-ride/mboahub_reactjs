const BASE_URL = process.env.REACT_APP_API_BASE_URL;
export const HOUSES_URL = `${BASE_URL}/houses`;
export const MY_HOUSES_URL = `${BASE_URL}/my/houses`;
export const getHouseUrl = ( house_id) => `${BASE_URL}/houses/${house_id}`;