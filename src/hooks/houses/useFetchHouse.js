import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRequest } from '../../utils/requests';
import { getHouseUrl } from '../../routes/server';

export const useFetchHouse = () => {
  const [house, setHouse] = useState();
  const [houseloading, setHouseLoading] = useState(false);
  const [error, setError] = useState();

  const { house_id } = useParams();
  const HOUSE_URL = getHouseUrl(house_id);

  useEffect(() => {
      (async() => {
          setHouseLoading(true);
          // let res = await getRequest(HOUSE_URL);
          // setHouseLoading(false);
          // if (Object.keys(res).includes('errors')) {
          //     setError(res.error);
          //     error && console.log(error);
          // }else{
          //     setHouse(res.house);
          // }
          try{
            let res = await getRequest(HOUSE_URL);
            setHouseLoading(false);
            setHouse(res.house);
          }catch(e){
            setHouseLoading(false);
            setError(e);
          }
        })();
  }, [house]);

  return { house, houseloading, error };
};