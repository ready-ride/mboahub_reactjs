import {useState } from 'react';
import { postRequest } from '../../utils/requests';
import { LOGIN_URL } from '../../routes/server';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
const [data, setData] = useState({email: '', password: ''});
const [remember, setRemember] = useState(false);
const [errors, setErrors] = useState();
const [loading, setLoading] = useState();

const navigate = useNavigate();

const handleLogin = e => {
    setLoading(true);
    e.preventDefault();

    if (!data.email) {
      setErrors('Email is required');
      setLoading(false);
      return
    };

    (async() => {
      try{
        let res = await postRequest(data, LOGIN_URL);
        if (res.success && res.data.token) {
            localStorage.setItem('login', JSON.stringify({
              token: res.data.token,
          }));
          navigate("/dashboard");
          setLoading(false);
          } else{
            setErrors(res.errors);
            setLoading(false);
          }
      }catch(e){
        setLoading(false);
        setErrors(e);
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

return { data, remember, setRemember, errors, loading, handleLogin, handleChange };
}
