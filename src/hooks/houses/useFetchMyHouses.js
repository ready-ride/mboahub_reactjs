/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';
import { getRequestWithToken } from '../../utils/requests';
import { MY_HOUSES_URL } from '../../routes/server';
import useLocalStorage from '../store/useLocalStorage';

export const useFetchMyHouses = () => {
  const [houses, setHouses] = useState();
  const [houseloading, setHouseLoading] = useState(false);
  const [error, setError] = useState();

  const { getAuthToken } = useLocalStorage();
  const { token } = getAuthToken();

  useEffect(() => {
    (async () => {
      setHouseLoading(true);
      const res = await getRequestWithToken(token, MY_HOUSES_URL);
      setHouseLoading(false);
      if (res && Object.keys(res).includes('errors')) {
        setError(res.error);
      } else {
        setHouses(res);
      }
    })();
  }, [error, token]);

  return { houses, houseloading, error };
};
