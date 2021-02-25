/* eslint-disable no-unused-vars */
import React from 'react';
import Calendar from '../../Calendar/Calendar';
import { auth } from '../../../lib/index';
import AddTodo from '../../Todos/AddTodo/AddTodo';
import ListTodo from '../../Todos/ListTodo/ListTodo';
import { useHistory } from 'react-router-dom';
const ProfilePage = () => {
  const history = useHistory();

  return (
    <>
      {console.log(history)}
      <button
        onClick={() => {
          auth.signOut();
        }}>
        Sign out
      </button>
      <Calendar />
      <AddTodo />
      <ListTodo history={history} />
    </>
  );
};

export default ProfilePage;
