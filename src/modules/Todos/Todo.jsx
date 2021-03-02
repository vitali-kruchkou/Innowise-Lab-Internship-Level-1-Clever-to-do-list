import React from 'react';

import ProfilePage from './ProfilePage/ProfilePage';
import { Redirect, Route, Switch } from 'react-router-dom';

import EditTodo from './EditTodo/EditTodo';
import { AddTodoPage } from './AddTodo/AddTodoPage';
import EditTodoPage from './EditTodo/EditTodoPage';

export const Todo = () => {
  return (
    <>
      <Switch>
        <Route path="/calendar" component={ProfilePage} />
        <Route path="/edittodo" component={EditTodoPage} />
        <Route path="/addtodo" component={AddTodoPage} />
        <Route path="/todo" component={EditTodo} />
        <Route path="/" component={ProfilePage} />
        <Route path="/">
          <Redirect to="/calendar" />
        </Route>
      </Switch>
    </>
  );
};

export default Todo;
