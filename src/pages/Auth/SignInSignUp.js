import React, { useState } from 'react';

import { FiLogOut, FiUserPlus } from 'react-icons/fi';
import { Navigate } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

import Navbar from '../../components/layouts/navbar/navbar';

function SignInSignUp() {
  const [form, setForm] = useState('signin');
  const token = JSON.parse(localStorage.getItem('login'));

  if (token) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <>
      <Navbar />
      <div className="signin-signup shadow rounded">
        <div className="left-form" />
        <div className="right-form">
          <div className="inner-right-form">
            <div className="row mb-4 mt-4">
              <button
                type="submit"
                className={`col-md-5 btn ${form === 'signin' ? 'btn-primary' : 'btn-outline-secondary'}`}
                onClick={() => setForm('signin')}
              >
                <FiLogOut />
                &nbsp;&nbsp;Sign In
              </button>
              <span className="col-md-2" />
              <button
                type="submit"
                className={`col-md-5 btn ${form === 'register' ? 'btn-primary' : 'btn-outline-secondary'}`}
                onClick={() => setForm('register')}
              >
                <FiUserPlus />
                &nbsp;&nbsp;Register
              </button>
            </div>
            <form className="row">
              {form === 'signin' && <SignIn />}
              {form === 'register' && <SignUp />}
            </form>
            <div className="dotted-divider">&nbsp;</div>
            <button type="submit" className="btn btn-primary facebook-btn">Facebook</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInSignUp;
