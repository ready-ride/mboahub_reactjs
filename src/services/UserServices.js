
  export const userLogout = () => {
    localStorage.removeItem('login');
  };

  export const userStatus = () => {
    return JSON.parse(localStorage.getItem('login'));
  };
