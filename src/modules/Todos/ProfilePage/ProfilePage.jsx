/* eslint-disable no-unused-vars */
import React from 'react';
import Calendar from '../Calendar/Calendar';
import { auth } from '@firebaseConfig/index';
import ListTodo from '../ListTodo/ListTodo';
import { useHistory } from 'react-router-dom';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Style from './StyledProfilePage';
import { SignOut } from '@firebaseConfig';

const ProfilePage = () => {
  const history = useHistory();

  const goEdit = () => {
    history.push('/addtodo');
  };

  const signOut = () => {
    SignOut();
  };

  return (
    <>
      <Style.Container>
        <Style.SignOut>
          <button onClick={signOut}>Sign out</button>
        </Style.SignOut>
        <Calendar />
        <ListTodo />
        <Style.Button>
          <Button onClick={goEdit}>
            <PlusCircleOutlined />
            Add a New Task
          </Button>
        </Style.Button>
      </Style.Container>
    </>
  );
};

export default ProfilePage;
