import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PasswordReset from './PasswordReset/PasswordReset';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
// import UserProvider from "../providers/UserProvider";
export default function Authentication() {
  return (
    <Switch>
      <Route path="/signIn" component={SignIn} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/passwordReset" component={PasswordReset} />
      <Redirect from="/" to="/signIn" />
    </Switch>
  );
}
