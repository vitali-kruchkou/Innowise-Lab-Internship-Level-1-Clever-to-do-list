import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TodoContext } from '../../../providers/DateProvider';
import { Form, Input } from 'antd';
import { firestore } from '../../../lib';
import styled from 'styled-components';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

export function EditTodoPage() {
  const [todo, setTodo] = useContext(TodoContext);
  const history = useHistory();
  const [title, setTitle] = useState(todo ? todo.title : '');
  const [description, setDescription] = useState(todo ? todo.description : '');
  // useEffect = () => {
  //   firestore.collection('todos').doc(todo.id).update({
  //     title: title,
  //     description: description,
  //     done: doc.data().done,
  //   });
  // };

  const editTodo = event => {
    event.preventDefault();
    firestore.collection('todos').doc(todo.id).update({
      title: title,
      description: description,
    });
    firestore
      .collection('todos')
      .doc(todo.id)
      .get()
      .then(doc => {
        if (doc.exists)
          setTodo({
            id: doc.id,
            title: doc.data().title,
            description: doc.data().description,
            done: doc.data().done,
          });
      })
      .then(res => {
        console.log('Update!', res);
      });
  };

  const cancelEdit = () => {
    history.goBack();
  };

  return (
    <>
      <S.Container>
        <Form>
          <S.Header>
            <button
              onClick={() => {
                history.push('/todo');
              }}>
              {'<'}
            </button>
            <h1>Edit Todo</h1>
          </S.Header>
          <Form.Item>
            <Input
              name="title"
              defaultValue={title}
              onChange={event => setTitle(event.target.value)}></Input>
          </Form.Item>
          <Form.Item>
            <Input.TextArea
              rows={14}
              name="description"
              defaultValue={description}
              onChange={event => setDescription(event.target.value)}
            />
          </Form.Item>
        </Form>
        <S.Buttons>
          <S.Icon>
            <CloseCircleOutlined onClick={cancelEdit} />
          </S.Icon>
          <S.Icon>
            <CheckCircleOutlined onClick={editTodo} />
          </S.Icon>
        </S.Buttons>
      </S.Container>
    </>
  );
}
export default EditTodoPage;

const S = {
  Container: styled.div`
    max-width: 400px;
    max-height: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space around;
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
