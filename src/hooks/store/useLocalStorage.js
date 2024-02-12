import { AUTH_TOKEN } from "../../constants/auth";

const useLocalStorage = () => {
  const setAuthToken = (token) => {
  localStorage.setItem(AUTH_TOKEN, JSON.stringify(token));
  };

  const getAuthToken = () => {
  return JSON.parse(localStorage.getItem(AUTH_TOKEN))
  };

  const removeAuthToken = () => {
  localStorage.removeItem(AUTH_TOKEN);
  };
  return {
    setAuthToken,
    getAuthToken,
    removeAuthToken
  }
}

export default useLocalStorage;