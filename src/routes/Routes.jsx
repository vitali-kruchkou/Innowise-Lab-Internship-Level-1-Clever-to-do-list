import React, { useContext } from 'react';
import { UserContext } from '@providers/UserProvider';
import DateProvider from '@providers/DateProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import Authentication from '@modules/Authentication/Authentication';
import Todo from '@modules/Todos/Todo';

const Routes = () => {
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
};

export default Routes;
