/* eslint-disable no-unused-vars */
import React from 'react';
import Calendar from '../Calendar/Calendar';
import { auth } from '@firebaseConfig/index';
import ListTodo from '../ListTodo/ListTodo';
import { useHistory } from 'react-router-dom';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Style from './StyledProfilePage';

const ProfilePage = () => {
  const history = useHistory();
  return (
    <>
      <Style.Container>
        <Style.SignOut>
          <button
            onClick={() => {
              auth.signOut();
            }}>
            Sign out
          </button>
        </Style.SignOut>
        <Calendar />
        {/* <AddTodo /> */}
        <ListTodo />
        <Style.Button>
          <Button
            onClick={() => {
              history.push('/addtodo');
            }}>
            <PlusCircleOutlined />
            Add a New Task
          </Button>
        </Style.Button>
      </Style.Container>
    </>
  );
};

export default ProfilePage;
