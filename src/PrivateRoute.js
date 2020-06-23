import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from "react-redux";

const useAuthenticate = () => {

  const { userDetails } = useSelector(state => state.userDetails)

  if (userDetails.token) {
    return true;
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  let token = useAuthenticate()
  return (
    <Route {...rest} render={(props) => (
      token
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )
}


export default PrivateRoute