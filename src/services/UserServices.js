export async function userSignup(data) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
console.log(process.env.REACT_APP_API_BASE_URL)
    let res = fetch(`${process.env.REACT_APP_API_BASE_URL}/signup`, requestOptions)
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.log(err));

    return await res;
  }

  export async function userLogin(data) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

   let res = fetch(`${process.env.REACT_APP_API_BASE_URL}/login`, requestOptions)
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.log(err));

        return await res;
  }

  export const userLogout = () => {
    localStorage.removeItem('login');
  };

  export const userStatus = () => {
    return JSON.parse(localStorage.getItem('login'));
  };
