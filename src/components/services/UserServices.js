export async function userSignup(data) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    let res = fetch('http://localhost:4000/v1//signup', requestOptions)
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

   let res = fetch('http://localhost:4000/v1/login', requestOptions)
        .then(response => response.json())
        .then(data => data);

        return await res;
  }
