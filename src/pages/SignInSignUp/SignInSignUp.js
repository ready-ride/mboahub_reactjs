import React, { useState } from 'react';

import SignIn from './SignIn';
import SignUp from './SignUp';


import { FiLogOut, FiUserPlus } from 'react-icons/fi';

function SignInSignUp() {
    const [form, setForm] = useState('signin');

  return (
    <div className='row'>
        <div className='col-md-6 mx-auto mt-4 shadow rounded'>
            <div className='row'>
                <div className='col-md-5 left-form'>

                </div>
                <div className='col-md-7 right-form'>
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
                        <button className='btn btn-primary facebook-btn'>Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignInSignUp;


