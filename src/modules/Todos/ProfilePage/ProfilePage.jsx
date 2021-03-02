/* eslint-disable no-unused-vars */
import React from 'react';
import Calendar from '../Calendar/Calendar';
import { auth } from '../../../firebase/index';
import ListTodo from '../ListTodo/ListTodo';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';

function ProfilePage() {
  const history = useHistory();
  return (
    <>
      <S.Container>
        <S.SignOut>
          <button
            onClick={() => {
              auth.signOut();
            }}>
            Sign out
          </button>
        </S.SignOut>
        <Calendar />
        {/* <AddTodo /> */}
        <ListTodo />
        <S.Button>
          <Button
            onClick={() => {
              history.push('/addtodo');
            }}>
            <PlusCircleOutlined />
            Add a New Task
          </Button>
        </S.Button>
      </S.Container>
    </>
  );
}

export default ProfilePage;

const S = {
  Container: styled.div`
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    @media (max-width: 762px) {
      max-width: 400px;
      max-height: 700px;
      margin: 0 auto;
    }
    @media (max-width: 575px) {
      max-width: 400px;
      max-height: 400px;
      margin: 0 auto;
    }
  `,
  Button: styled.div`
    margin: 0 auto;
    text-align: center;
    border: none;
    & > button {
      background-color: #b629fd;
      color: white;
      border: none;
    }
  `,
  SignOut: styled.div`
    color: #000080;
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: 20px;
    & > button {
      background-color: black;
      color: white;
      border: none;
    }
    @media (max-width: 575px) {
      font-size: 13px;
    }
  `,
};
