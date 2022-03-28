import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { userSignup } from '../../components/services/UserServices';
import FormInput from '../../components/forms/FormInput';
import './SignInSignUp.css';

const SignUp = () => {
    const [data, setData] = useState(
    {
        email: '',
        password: '',
        password_confirmation: '',
    });
    const [response, setResponse] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const handleClick = e => {
        e.preventDefault();
        setLoading(true);

        (async() => {
            let res = await userSignup(data);
            setLoading(false);
            if (Object.keys(res).includes('error')) {
                setError(res['error']);
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
            {error && error.map((e, i) => <li className='text-danger' key={i}>{e}</li>) }
        </ul>
        <FormInput type="email" name="email" placeholder="Enter Email" label="Email" data={data.email} handleChange={handleChange} />
        <FormInput type="password" name="password" placeholder="Enter Password" label="Password" data={data.password} handleChange={handleChange} />
        <FormInput type="password" name="password_confirmation" placeholder="Enter Password Confirmation" label="Password Confirmation" data={data.password_confirmation} handleChange={handleChange} />
        <div className='d-flex justify-content-between mt-3'>
            <div>
                <input type="checkbox" className="remember-check-box" id="exampleCheck1" />&nbsp;
                <label className="remember-check-box" htmlFor="exampleCheck1">Remember me</label>
            </div>
            <Link to="/password_reset">Forgot password ?</Link>
        </div>
        {error && <p className='text-danger'>Please check registration errors above and try again</p> }
        <button type="submit" onClick={ handleClick } className="btn btn-primary mt-3 btn btn-block" disabled={loading}>{ loading ? 'please wait..' : 'Register' }</button>
   </div>
  )
}

export default SignUp;
