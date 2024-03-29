/* eslint-disable camelcase */
const BASE_URL = process.env.REACT_APP_API_BASE_URL;
export const HOUSES_URL = `${BASE_URL}/houses`;
export const MY_HOUSES_URL = `${BASE_URL}/my/houses`;
export const getHouseUrl = (house_id) => `${BASE_URL}/houses/${house_id}`;
export const LOGIN_URL = `${BASE_URL}/login`;
export const SIGNUP_URL = `${BASE_URL}/signup`;
export const USER_DETAILS_URL = `${BASE_URL}/my/details`;
export const PASSWORD_UPDATE_URL = `${BASE_URL}/my/password`;
export const MESSAGE_CREATE_URL = `${BASE_URL}/messages`;
export const ANONYMOUS_MESSAGE_URL = `${BASE_URL}/messages/anonymous_create`;
