import React, { useContext } from 'react';
import { Router } from '@reach/router';
import SignIn from '../components/Authentication/SignIn/SignIn';
import SignUp from '../components/Authentication/SignUp/SignUp';
import PasswordReset from '../components/Authentication/PasswordReset/PasswordReset';
import { UserContext } from '../providers/UserProvider';
import DateProvider from '../providers/DateProvider';
import ProfilePage from '../components/Authentication/ProfilePage/ProfilePage';
export default function Auth() {
  const user = useContext(UserContext);
  return user ? (
    // <Router>
    //   <Redirect from="/" to="home">
    <DateProvider>
      <Router>
        <ProfilePage path="/" />
      </Router>
    </DateProvider>
  ) : (
    //   {/* </Redirect>
    // </Router> */}
    <Router>
      <SignUp path="signUp" />
      <SignIn path="/" />
      <PasswordReset path="passwordReset" />
    </Router>
  );
}
