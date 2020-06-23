import React from 'react'
import {  Route,Redirect } from 'react-router-dom'

const isAuthenticate = () => {
    const token = sessionStorage.getItem('token');
    if (token) {
      return true;
    }
  }
  
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      isAuthenticate()
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  )
  

  export default PrivateRoute