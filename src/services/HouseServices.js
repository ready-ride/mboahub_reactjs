export async function createHouses(data) {
    const headers = {'Content-Type': 'application/json', 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZmI5MDQ1OGItMjMzYS00NzgwLTlkMzQtYjFlZDEyYThiNjg0IiwiZXhwIjoxNjQ4OTY1NDU5fQ.8t05L_oEoI4xO7FRCXuCNq1ZENMpo4UdCBQ6NkX2QxA'};

    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    };

    let res = fetch('http://localhost:4000/v1/houses', requestOptions)
        .then(response => response.json())
        .then(data => data);

    return await res;
  }
