import { useState } from 'react';
import { postRequestWithToken } from '../../utils/requests';
import { MY_HOUSES_URL } from '../../routes/server';
import { userStatus } from '../../services/UserServices';

export const useHouseCreate = (urls) => {

  let token = userStatus();
  token = token && token.token;

  const [data, setData] = useState({});
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [houseloading, setHouseLoading] = useState(false);

  const handleCreateHouse = e => {
    e.preventDefault();

    setHouseLoading(true);

const houseData = {
    listing_name: data.listing_name,
    summary: data.summary,
    home_type: data.home_type || '',
    cost: data.cost,
    location: {
        city: data.city,
        street: data.street,
    },
    properties: {
        num_bed_rooms: data.num_bed_rooms,
        sitting_room: data.sitting_room,
        parking: data.parking,
        kitchen: data.kitchen,
        fence: data.fence,
        num_toilets: data.num_toilets,
    },
    images: urls,
};

    (async() => {
        let res = await postRequestWithToken(houseData, token, MY_HOUSES_URL);
        setHouseLoading(false);
        if (Object.keys(res).includes('error')) {
            setError(res['error']);
        }else {
            setResponse(res);
        }
      })();
};

const handleChange = e => {
    const { name, value } = e.target;
    setData(prevState => ({
        ...prevState,
        [name]: value
    }));
};

const handleSelect = e => {
    const { name, value } = e.target;
    setData(prevState => ({
        ...prevState,
        [name]: value
    }));
};

return { handleChange, handleSelect, handleCreateHouse, error, houseloading, response, data };
};