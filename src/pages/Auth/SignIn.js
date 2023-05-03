import React from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../../components/forms/FormInput';

import './SignInSignUp.css';
import { useLogin } from '../../hooks/auth/useLogin';

const SignIn = () => {
  const { data, remember, setRemember, errors, loading, handleLogin, handleChange } = useLogin();

  return (
    <div className='col-md-12 signin'>
        <ul >
            {errors && <li className='text-danger'>{errors[0]}</li> }
        </ul>
        <FormInput type="email" name="email" placeholder="Enter email" label="Email" data={data.email} handleChange={handleChange} />
        <FormInput type="password" name="password" placeholder="Enter password" label="Password" data={data.password} handleChange={handleChange} />
        <div className='d-flex align-items-center justify-content-between flex-wrap mt-3'>
            <>
                <div className='form-row align-items-center'>
                    <div className="col-auto">
                        <div className="form-check">
                            <input value={remember} onChange={e => setRemember(e.target.checked)} className="form-check-input" type="checkbox" id="autoSizingCheck" />&nbsp;
                            <label className="form-check-label" htmlFor="autoSizingCheck">
                            Remember me
                            </label>
                        </div>
                    </div>
                </div>
            </>
            <Link to="/password_reset">Forgot password ?</Link>
        </div>
        {errors && <p className='text-danger'>Please check login errors above and try again</p> }
        <button type="submit" onClick={handleLogin} className="btn btn-primary mt-3 btn btn-block" disabled={loading}>{ loading ? 'please wait..' : 'Login' }</button>
   </div>
  )
}

export default SignIn;
