/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { firestore } from '../../../lib/index';
import { Form, Input } from 'antd';
import styled from 'styled-components';
import { DateContext } from '../../../providers/DateProvider';
import { UserContext } from '../../../providers/UserProvider';
import { useHistory } from 'react-router-dom';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import toast, { Toaster } from 'react-hot-toast';

const AddTodo = () => {
  const [day] = useContext(DateContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [, setSuccess] = useState();
  const user = useContext(UserContext);
  const history = useHistory();
  const addTodo = event => {
    // const date = `${format(day, 'dd MM yyyy')}`;
    event.preventDefault();
    firestore.collection('todos').add({
      userId: user.uid,
      title: title,
      description: description,
      day: day,
      done: false,
    });
    setTitle('');
    setDescription('');
    setSuccess(toast.success('Add in your list'));
  };
  const cancelEdit = () => {
    history.goBack();
  };

  return (
    <>
      <Toaster />
      <S.Container>
        <S.Header>
          <span
            onClick={() => {
              history.push('/');
            }}>
            {'<'}
          </span>
          <h1>Add Todo</h1>
        </S.Header>
        <Form>
          <Form.Item>
            <Input
              type="text"
              id="todoTitle"
              name="todo"
              value={title}
              placeholder="Title"
              onChange={event => setTitle(event.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Input.TextArea
              type="text"
              id="todoDescription"
              name="todo"
              value={description}
              placeholder="Description"
              onChange={event => setDescription(event.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <S.Buttons>
              <S.Icon>
                <CloseCircleOutlined onClick={cancelEdit} />
              </S.Icon>
              <S.Icon>
                <CheckCircleOutlined onClick={addTodo} />
              </S.Icon>
            </S.Buttons>
          </Form.Item>
        </Form>
      </S.Container>
    </>
  );
};

export default AddTodo;

const S = {
  Container: styled.div`
    width: 300px;
    margin: 0 auto;
    @media (max-width: 768px) {
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
    justify-content: space-around;
    & > button {
      width: 50px;
      background-color: white;
      border: 1px solid gray;
      border-radius: 40px 40px 40px 40px;
    }
  `,
  Icon: styled.span`
  font-size: 30px;S
`,
};
