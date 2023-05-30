/* eslint-disable no-param-reassign */
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

  const formatError = (errors) => {
    errors.forEach((error) => {
      if (error.toLowerCase().includes('validation')) {
        error = error.split(':');
        error = error[1].split(',');
        setError(error);
      }
    });
  };

  const handleCreateHouse = (e) => {
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
        lat: data.lat,
        lng: data.lng,
        country: data.country,
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

    (async () => {
      const res = await postRequestWithToken(houseData, token, MY_HOUSES_URL);
      setHouseLoading(false);
      if (res.success) {
        setResponse(res);
      } else {
        formatError(res.errors);
      }
    })();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelect = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return {
    handleChange, handleSelect, handleCreateHouse, error, houseloading, response, data,
  };
};

export default useHouseCreate;
