import {useState, useEffect } from 'react';
import { getRequest } from '../../utils/requests';
import { HOUSES_URL } from '../../routes/server';

export const useFetchHouses = () => {

  const [houses, setHouses] = useState();
  const [houseloading, setHouseLoading] = useState(false);
  const [error, setError] = useState();

useEffect(() => {
    (async() => {
        setHouseLoading(true);
        let res = await getRequest(HOUSES_URL);
        setHouseLoading(false);
        if (res && Object.keys(res).includes('errors')) {
            setError(res.error);
            error && console.log(error);
        }else{
            setHouses(res);
        }
      })();
}, []);

return { houses, houseloading, error };
};