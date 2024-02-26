/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SIGNUP_URL } from '../../routes/server';
import { postRequest } from '../../utils/requests';

export const useSignUp = () => {
  const [data, setData] = useState({
    role: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [response, setResponse] = useState();
  const [errors, setErrors] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const formatError = (errors) => {
    if (typeof errors === 'object') {
      if (errors[0].toLowerCase().includes('validation')) {
        const formatedError = errors[0].split(':');
        setErrors(formatedError[1].split(','));
      }
    } else {
      setErrors(errors);
    }
  };

  const handleSignup = (e) => {
    setLoading(true);
    e.preventDefault();

    if (!data.email) {
      setErrors('Email is required');
      setLoading(false);
      return;
    }

    (async () => {
      try {
        const res = await postRequest(data, SIGNUP_URL);
        if (res.success) {
          localStorage.setItem(
            'login',
            JSON.stringify({
              token: res.data.token,
            }),
          );
          navigate('/dashboard');
          setLoading(false);
        } else {
          formatError(res.errors);
          setLoading(false);
        }
      } catch (e) {
        setLoading(false);
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
    handleSelect, handleSignup, handleChange, response, loading, errors, setResponse, data,
  };
};
