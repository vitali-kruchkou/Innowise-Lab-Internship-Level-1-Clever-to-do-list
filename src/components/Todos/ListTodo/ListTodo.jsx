/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { firestore } from '../../../lib/index';
import styled from 'styled-components';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { format } from 'date-fns';
import { DateContext } from '../../../providers/DateProvider';
import { Router } from '@reach/router';
import EditTodo from '../EditTodo/EditTodo';
import { useHistory } from 'react-router-dom';
const ListTodo = () => {
  const [day] = useContext(DateContext);
  const history = useHistory();
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    console.log('useEffect Hook!!!');
    if (day) {
      const date = `${format(day, 'dd MM yyyy')}`;

      firestore
        .collection('todos')
        .where('day', '==', date)
        .onSnapshot(snapshot => {
          console.log('Firebase Snap!');
          setTodos(
            snapshot.docs.map(doc => {
              return {
                date: day,
                name: doc.data().todo,
                datatime: new Date(),
              };
            }),
          );
        });
    }
  }, [day]);

  const deleteTodo = id => {
    firestore
      .collection('todos')
      .doc(id)
      .delete()
      .then(res => {
        console.log('Deleted!', res);
      });
  };

  function redirectClick() {
    console.log(history);
    // history.push('/home');
  }

  return (
    <>
      <S.List>
        {todos.map(todo => {
          return (
            <S.ListItem
              key={todo.id}
              onClick={() => {
                redirectClick();
              }}>
              {todo.name} {console.log(format(todo.datatime, 'MMMM yyyy'))}
              {/* <EditOutlined />
              <DeleteOutlined onClick={() => deleteTodo(todo.id)} /> */}
            </S.ListItem>
          );
        })}
      </S.List>
    </>
  );
};

export default ListTodo;

const S = {
  List: styled.ul`
    text-align: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
  `,
  ListItem: styled.li`
    margin: 0 auto;
    border: 1px solid black;
  `,
};
