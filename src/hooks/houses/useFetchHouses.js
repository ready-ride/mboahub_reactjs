/* eslint-disable no-unreachable */
import { useState, useEffect } from 'react';
import { getRequest } from '../../utils/requests';
import { HOUSES_URL } from '../../routes/server';
import housesSample from '../../data/housesSample';

export const useFetchHouses = (inputObj) => {
  const [houses, setHouses] = useState();
  const [houseCount, setHouseCount] = useState();
  const [houseloading, setHouseLoading] = useState(false);
  const [error, setError] = useState();
  const [params, setParams] = useState({ limit: 6, page: 0 });

  // stub houses data for testing, while backend not hosted
  const { housesList, numHouses } = housesSample;
  const numPages = Math.round(houseCount / params.limit);
  useEffect(() => {
    // temporal set for testing while backend is not hosted
    setHouseLoading(true);
    setTimeout(() => {
      setHouses(housesList);
      setHouseCount(numHouses);
      setHouseLoading(false);
    }, 1000);
    return;
    // end of temporal code
    (async () => {
      setHouseLoading(true);
      let url = `${HOUSES_URL}?limit=${params.limit}&page=${params.page}`;

      if (inputObj && inputObj.listingName) {
        url += `&listingName=${inputObj.listingName}`;
      }
      if (inputObj && inputObj.location) {
        url += `&location=${inputObj.location}`;
      }
      if (inputObj && inputObj.businessType) {
        url += `&businessType=${inputObj.businessType}`;
      }
      if (inputObj && inputObj.street) {
        url += `&street=${inputObj.street}`;
      }
      if (inputObj && inputObj.city) {
        url += `&city=${inputObj.city}`;
      }
      if (inputObj && inputObj.country) {
        url += `&country=${inputObj.country}`;
      }
      if (inputObj && inputObj.homeType) {
        url += `&homeType=${inputObj.homeType}`;
      }

      const res = await getRequest(url);
      try {
        if (res.success) {
          setHouseLoading(false);
          setHouses(res.data.houses);
          setHouseCount(res.data.num_houses);
        } else {
          setHouseLoading(false);
          setError(res.errors);
        }
      } catch {
        setHouseLoading(false);
        setError('a server error occurred');
      }
    })();
  }, [params, inputObj, housesList, numHouses]);

  function handlePageClickPrev() {
    if (params.page === 0) return;
    setParams({ ...params, page: params.page - 1 });
  }
  function handlePageClickNext() {
    if (params.page > numPages) return;
    setParams({ ...params, page: params.page + 1 });
  }

  return {
    handlePageClickPrev,
    handlePageClickNext,
    numPages,
    params,
    houses,
    houseloading,
    error,
  };
};

export default useFetchHouses;
