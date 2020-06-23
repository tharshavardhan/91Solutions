import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Dashboard from './Components/Dashboard';
import PrivateRoute from './PrivateRoute';
import Loginpage from './Components/LoginPage';
import RoleBaseAuthorization from './Components/RoleBaseAuthorization'
import HomePage from './Components/HomePage'
function App(props) {

  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={() => <Redirect to="login" />} />
            <PrivateRoute path='/HomePage'
              component={RoleBaseAuthorization(HomePage,
                ['admin', 'read'], "HomePage")}
            />
            <PrivateRoute path="/dashboard"
              component={RoleBaseAuthorization(Dashboard,
                ['admin'], "DashBoard")} />
            <Route path="/login" component={Loginpage} />

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default (App);
