import React, { useState, useEffect } from 'react';

import SignIn from './SignIn';
import SignUp from './SignUp';


import { FiLogOut, FiUserPlus } from 'react-icons/fi';
import Login from '../../components/requests/GoogleAuth/Login';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

function SignInSignUp() {
    const navigate = useNavigate();
    const [form, setForm] = useState('signin');

    const [auth, setAuth] = useState('');

    useEffect(() => {
      const token = JSON.parse(localStorage.getItem('login'));
      setAuth(token);
    }, [])

    if(auth){
        navigate("/dashboard");
    }
  return (
   <>
    <Navbar />
    <div className='signin-signup shadow rounded'>
        <div className='left-form'></div>
        <div className='right-form'>
            <div className='inner-right-form'>
                <div className='row mb-4 mt-4'>
                    <button className={`col-md-5 btn ${form === 'signin' ? 'btn-primary' : 'btn-outline-secondary'}`} onClick={() => setForm('signin')}>
                        <FiLogOut />&nbsp;&nbsp;Sign In
                    </button>
                    <span className='col-md-2'></span>
                    <button className={`col-md-5 btn ${form === 'register' ? 'btn-primary' : 'btn-outline-secondary' }`} onClick={() => setForm('register')}>
                        <FiUserPlus />&nbsp;&nbsp;Register
                    </button>
                </div>
                <form className='row'>
                    {form === 'signin' &&  <SignIn />}
                    {form === 'register' && <SignUp />}
                </form>
                <div className='dotted-divider'>&nbsp;</div>
                {/* <button className='btn btn-primary facebook-btn'>Facebook</button> */}
                <div className='g-signin'>
                    <Login />
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default SignInSignUp;


