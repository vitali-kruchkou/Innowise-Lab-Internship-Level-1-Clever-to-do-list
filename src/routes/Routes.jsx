import React, { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';
import DateProvider from '../providers/DateProvider';
import { BrowserRouter as Router } from 'react-router-dom';

import Authentication from '../components/Authentication/Authentication';
import Todo from '../components/Todos/Todo';

export default function Routes() {
  const user = useContext(UserContext);

  return user ? (
    <DateProvider>
      <Router>
        <Todo />
      </Router>
    </DateProvider>
  ) : (
    <Router>
      <Authentication />
    </Router>
  );
}
