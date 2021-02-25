import React, { createContext, useEffect, useState } from 'react';
import { auth, generateUserDocument } from '../lib';
import PropTypes from 'prop-types';
export const UserContext = createContext({ user: null });

export function UserProvider(props) {
  // state = {
  //   user: null,
  // };

  const [user, setUser] = useState(null);

  useEffect(() => {
    return async () => {
      auth.onAuthStateChanged(async userAuth => {
        const user = await generateUserDocument(userAuth);
        setUser(user);
      });
    };
  }, []);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
}

export default UserProvider;

UserProvider.propTypes = {
  children: PropTypes.object,
};
