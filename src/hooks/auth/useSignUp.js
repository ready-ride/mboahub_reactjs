import { useState } from 'react';
import { SIGNUP_URL } from '../../routes/server';
import { postRequest } from '../../utils/requests';
import { useNavigate } from 'react-router-dom';

export const useSignUp = () => {
  const [data, setData] = useState(
    {
        email: '',
        password: '',
        password_confirmation: '',
    });
    const [response, setResponse] = useState();
    const [errors, setErrors] = useState();
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSignup = e => {
      setLoading(true);
      e.preventDefault();

      if (!data.email) {
        setErrors('Email is required');
        setLoading(false);
        return
      };
  
      (async() => {
        try{
          let res = await postRequest(data, SIGNUP_URL);
          if (res.token) {
            localStorage.setItem('login', JSON.stringify({
              token: res.token,
          }));
          navigate("/dashboard");
          setLoading(false);
          }
        }catch(e){
          setLoading(false);
          console.log(e);
        }
      })();
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return { handleSignup, handleChange, response, loading, errors, setResponse, data };
}