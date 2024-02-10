import { userStatus } from '../../services/UserServices'

const useUserStatus = () => {
  let token = userStatus()
  token = token && token.token
  const isLoggedIn = !!token
  return { isLoggedIn, token }
}

export default useUserStatus
