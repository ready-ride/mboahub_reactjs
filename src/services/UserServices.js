/* eslint-disable camelcase */
export const userLogout = () => {
  localStorage.removeItem('login');
};

export const userStatus = () => {
  const login_token = JSON.parse(localStorage.getItem('login'));
  if (login_token && login_token.token == null) {
    localStorage.removeItem('login');
  }
  return login_token;
};
