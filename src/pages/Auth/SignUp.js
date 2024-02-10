import React from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../../components/forms/FormInput';
import './SignInSignUp.css';
import { useSignUp } from '../../hooks/auth/useSignUp';

const SignUp = () => {
  const { handleSignup, handleChange, loading, errors, data } = useSignUp();

  return (
    <div className='col-md-12'>
        <FormInput type="email" name="email" placeholder="Enter Email" label="Email" data={data.email} handleChange={handleChange} />
        <FormInput type="password" name="password" placeholder="Enter Password" label="Password" data={data.password} handleChange={handleChange} />
        <FormInput type="password" name="password_confirmation" placeholder="Enter Password Confirmation" label="Password Confirmation" data={data.password_confirmation} handleChange={handleChange} />
        <div className='d-flex align-items-center justify-content-between flex-wrap mt-3'>
            <>
                <div className='form-row align-items-center'>
                    <div className="col-auto">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="autoSizingCheck" />&nbsp;
                            <label className="form-check-label" htmlFor="autoSizingCheck">
                            Remember me
                            </label>
                        </div>
                    </div>
                </div>
            </>
            <Link to="/password_reset">Forgot password ?</Link>
        </div>
        <button type="submit" onClick={ handleSignup } className="btn btn-primary mt-3 btn btn-block" disabled={loading}>{ loading ? 'please wait..' : 'Register' }</button>
        {errors && <p className='text-danger'>{errors[0]}</p> }
   </div>
  )
}

export default SignUp;
