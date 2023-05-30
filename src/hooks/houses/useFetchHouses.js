import { useState, useEffect } from 'react';
import { getRequest } from '../../utils/requests';
import { HOUSES_URL } from '../../routes/server';

export const useFetchHouses = () => {
  const [houses, setHouses] = useState();
  const [houseCount, setHouseCount] = useState();
  const [houseloading, setHouseLoading] = useState(false);
  const [error, setError] = useState();
  const [params, setParams] = useState({ limit: 6, page: 0 });

  const numPages = Math.round(houseCount / params.limit);

  useEffect(() => {
    (async () => {
      setHouseLoading(true);
      const url = `${HOUSES_URL}?limit=${params.limit}&page=${params.page}`;

      const res = await getRequest(url);
      if (res.success) {
        setHouseLoading(false);
        setHouses(res.data.houses);
        setHouseCount(res.data.num_houses);
      } else {
        setHouseLoading(false);
        setError(res.errors);
      }
    })();
  }, [params]);

  function handlePageClickPrev() {
    if (params.page === 0) return;
    setParams({ ...params, page: params.page - 1 });
  }
  function handlePageClickNext() {
    if (params.page > numPages) return;
    setParams({ ...params, page: params.page + 1 });
  }

  return {
    handlePageClickPrev, handlePageClickNext, numPages, params, houses, houseloading, error,
  };
};

export default useFetchHouses;
