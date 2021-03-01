import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { TodoContext } from '../../../providers/DateProvider';
import { firestore } from '../../../lib/index';
import { useHistory } from 'react-router-dom';
import { Checkbox } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import toast, { Toaster } from 'react-hot-toast';

function EditTodo() {
  const [todo] = useContext(TodoContext);
  const [isDone, setDone] = useState(todo.done);
  const history = useHistory();
  const [, setSuccess] = useState();

  useEffect(() => {
    firestore.collection('todos').doc(todo.id).update({
      done: isDone,
    });
  });

  const deleteTodo = id => {
    firestore
      .collection('todos')
      .doc(id)
      .delete()
      .then(res => {
        console.log('Deleted!', res);
      });
    setSuccess(toast.success('Deleted!'));
    setTimeout(() => {
      history.goBack();
    }, 3000);
  };
  const onChange = () => {
    setDone(!isDone);
  };
  return (
    <>
      <Toaster />
      <S.Container>
        <S.Header>
          <button
            onClick={() => {
              history.push('/');
            }}>
            {'<'}
          </button>
          <h1>Todo</h1>
        </S.Header>
        <S.Main>
          <h2> {todo.title}</h2>
          <p>{todo.description}</p>
        </S.Main>
        <S.Buttons>
          <button onClick={() => deleteTodo(todo.id)}>
            <DeleteOutlined />
          </button>
          <button onClick={() => history.push('/edittodo')}>
            <EditOutlined />
          </button>
          <S.CheckboxTrue>
            <Checkbox defaultChecked={todo.done} onChange={onChange}>
              Complete
            </Checkbox>
          </S.CheckboxTrue>
        </S.Buttons>
      </S.Container>
    </>
  );
}

export default EditTodo;

const S = {
  Container: styled.div`
    width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    @media (max-width: 760px) {
      width: 300px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
    }
  `,
  Header: styled.div`
    width: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    & > h1 {
      margin: 0 auto;
    }
    & > button {
      padding-right: 20px;
      margin-left: 10px;
      width: 20px;
      border: none;
      background-color: #f9f6f6;
      border-radius: 40px 40px 40px 40px;
    }
  `,
  Buttons: styled.div`
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & > button {
      width: 50px;
      background-color: white;
      border: 1px solid gray;
      border-radius: 40px 40px 40px 40px;
    }
  `,
  Main: styled.div`
    & > p {
      color: #5c5c5c;
    }
  `,
  CheckboxTrue: styled.div`
    border-radius: 40px 40px 40px 40px;
    width: 120px;
    background-color: #73fa85;
  `,
  CheckboxFalse: styled.div`
    border-radius: 40px 40px 40px 40px;
    width: 120px;
    background-color: #f95056;
  `,
};
