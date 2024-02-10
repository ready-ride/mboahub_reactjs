import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SIGNUP_URL } from '../../routes/server'
import { postRequest } from '../../utils/requests'

export const useSignUp = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    password_confirmation: ''
  })
  const [response, setResponse] = useState()
  const [errors, setErrors] = useState()
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const formatError = (errors) => {
    errors.forEach((error) => {
      if (error.toLowerCase().includes('validation')) {
        error = error.split(':')
        error = error[1].split(',')
        setErrors(error)
      }
    })
  }

  const handleSignup = (e) => {
    setLoading(true)
    e.preventDefault()

    if (!data.email) {
      setErrors('Email is required')
      setLoading(false)
      return
    }

    ;(async () => {
      try {
        const res = await postRequest(data, SIGNUP_URL)
        if (res.success) {
          localStorage.setItem(
            'login',
            JSON.stringify({
              token: res.data.token
            })
          )
          navigate('/dashboard')
          setLoading(false)
        } else {
          formatError(res.errors)
          setLoading(false)
        }
      } catch (e) {
        setLoading(false)
        console.log(e)
      }
    })()
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return { handleSignup, handleChange, response, loading, errors, setResponse, data }
}
