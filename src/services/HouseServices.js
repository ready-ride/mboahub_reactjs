export async function createHouses(data, token) {
    const headers = {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`};

    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    };

    let res = fetch(`http://localhost:3000/v1/my/houses`, requestOptions)
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.log(err));

    return await res;
  }

  export async function getMyHouses(token) {
    const headers = {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`};

    let res = fetch(`http://localhost:3000/v1/my/houses`, {headers})
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.log(err));

    return await res;
  }

  export async function getHouses() {
    const headers = {'Content-Type': 'application/json'};

    let res = fetch(`http://localhost:3000/v1/houses`, {headers})
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.log(err));

    return await res;
  }

  export async function getHouse(house_id) {
    const headers = {'Content-Type': 'application/json'};

    let res = fetch(`http://localhost:3000/v1/houses/${house_id}`, {headers})
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.log(err));

    return await res;
  }
