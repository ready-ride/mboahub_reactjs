import { getRequest, getRequestWithToken, postRequestWithToken } from "../utils/requests";
export async function createHouses(data, token) {
    return postRequestWithToken(data, token, `${process.env.REACT_APP_API_BASE_URL}/my/houses`);
  }

  export async function getMyHouses(token) {
    return getRequestWithToken(token, `${process.env.REACT_APP_API_BASE_URL}/my/houses`);
  }

  export async function getHouse(house_id) {
    return await getRequest(`${process.env.REACT_APP_API_BASE_URL}/houses/${house_id}`);
  }
