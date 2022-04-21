import React, { Component } from 'react';

import { userStatus } from '../services/UserServices';

const requireAuth = (wrappedComponent) => {
  class EnhancedComponent extends Component {
    constructor(){
      token = userStatus();
      token = token && token.token;

      if(!token){
        return <Navigate to="/signin" />
        }
      }

    render() {
      return <wrappedComponent {...props} />;
    }
  }
  return <EnhancedComponent />;
};

export default requireAuth;
