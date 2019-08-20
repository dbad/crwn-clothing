import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sing-up"> 
    {'sign in'.toUpperCase()}

    <SignIn />
  </div>
)

export default SignInAndSignUpPage;