export async function postRequestWithToken(data, token, url) {
  const headers = {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`};

  const requestOptions = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
  };

  let res = fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => data)
      .catch(err => console.log(err));

  return await res;
}

export async function getRequestWithToken(token, url) {
  const headers = {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`};

  let res = fetch(url, {headers})
      .then(response => response.json())
      .then(data => data)
      .catch(err => console.log(err));

  return await res;
}

export async function getRequest(url) {
    const headers = {'Content-Type': 'application/json'};

    let res = fetch(url, {headers})
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.log(err));

    return await res;
  }
