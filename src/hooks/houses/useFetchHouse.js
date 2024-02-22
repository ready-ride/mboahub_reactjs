/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRequest } from '../../utils/requests';
import { getHouseUrl } from '../../routes/server';
import housesSample from '../../data/housesSample';

export const useFetchHouse = () => {
  const [house, setHouse] = useState();
  const [houseloading, setHouseLoading] = useState(false);
  const [error, setError] = useState();

  const { house_id } = useParams();
  const HOUSE_URL = getHouseUrl(house_id);
  // stubbing house detail fetch
  const houseSample = housesSample.housesList.filter((house) => house.id === house_id);

  useEffect(() => {
    (async () => {
      setHouseLoading(true);
      try {
        const res = await getRequest(HOUSE_URL);
        setHouseLoading(false);
        setHouse(res.house);
      } catch (e) {
        setHouse(houseSample[0]);
        setHouseLoading(false);
        setError(e);
      }
    })();
  }, [HOUSE_URL]);

  return { house, houseloading, error };
};
