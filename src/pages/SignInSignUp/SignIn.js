import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../../components/forms/FormInput';
import { userLogin } from '../../components/services/UserServices';

import './SignInSignUp.css';

const SignIn = () => {
    const [data, setData] = useState({email: '', password: ''});
    const [response, setResponse] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const handleClick = e => {
        setLoading(true);
        e.preventDefault();

        (async() => {
            let res = await userLogin(data);
            setLoading(false);
            if (Object.keys(res).includes('error')) {
                setError(res.error);
            }else {
               response && setResponse(res);
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
  return (
    <div className='col-md-12'>
        <ul >
            {error && <li className='text-danger'>{error}</li> }
        </ul>
        <FormInput type="email" name="email" placeholder="Enter email" label="Email" data={data.email} handleChange={handleChange} />
        <FormInput type="password" name="password" placeholder="Enter password" label="Password" data={data.password} handleChange={handleChange} />
        <div className='d-flex justify-content-between mt-3'>
            <div>
                <input type="checkbox" className="remember-check-box" id="exampleCheck1" />&nbsp;
                <label className="remember-check-box" htmlFor="exampleCheck1">Remember me</label>
            </div>
            <Link to="/password_reset">Forgot password ?</Link>
        </div>
        {error && <p className='text-danger'>Please check registration errors above and try again</p> }
        <button type="submit" onClick={handleClick} className="btn btn-primary mt-3 btn btn-block" disabled={loading}>{ loading ? 'please wait..' : 'Login' }</button>
   </div>
  )
}

export default SignIn;
