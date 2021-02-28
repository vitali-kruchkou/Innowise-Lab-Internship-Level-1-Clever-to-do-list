/* eslint-disable no-unused-vars */
import React from 'react';
import Calendar from '../Calendar/Calendar';
import { auth } from '../../../lib/index';
import ListTodo from '../ListTodo/ListTodo';
import { useHistory } from 'react-router-dom';
function ProfilePage() {
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
      <button
        onClick={() => {
          history.push('/addtodo');
        }}>
        AddTodo
      </button>
      <Calendar />
      {/* <AddTodo /> */}
      <ListTodo />
    </>
  );
}

export default ProfilePage;
