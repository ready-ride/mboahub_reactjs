import { useState, useEffect } from 'react'
import { userStatus } from '../../services/UserServices'
import { getRequestWithToken } from '../../utils/requests'
import { MY_HOUSES_URL } from '../../routes/server'

export const useFetchMyHouses = () => {
  const [houses, setHouses] = useState()
  const [houseloading, setHouseLoading] = useState(false)
  const [error, setError] = useState()

  let token = userStatus()
  token = token && token.token

  useEffect(() => {
    ;(async () => {
      setHouseLoading(true)
      const res = await getRequestWithToken(token, MY_HOUSES_URL)
      setHouseLoading(false)
      if (res && Object.keys(res).includes('errors')) {
        setError(res.error)
        error && console.log(error)
      } else {
        setHouses(res)
      }
    })()
  }, [error, token])

  return { houses, houseloading, error }
}
