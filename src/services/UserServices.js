export async function userSignup(data) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    let res = fetch('https://myplace-api.herokuapp.com/signup', requestOptions)
        .then(response => response.json())
        .then(data => data);

    return await res;
  }

  export async function userLogin(data) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

   let res = fetch('https://myplace-api.herokuapp.com/v1/login', requestOptions)
        .then(response => response.json())
        .then(data => data);
        return await res;
  }

  export const userLogout = () => {
    localStorage.removeItem('login');
  };

  export const userStatus = () => {
    return JSON.parse(localStorage.getItem('login'));
  };
