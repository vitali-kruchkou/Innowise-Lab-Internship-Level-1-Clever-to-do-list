/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { firestore } from '../../../lib/index';
import styled from 'styled-components';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { format } from 'date-fns';
import { DateContext, TodoContext } from '../../../providers/DateProvider';

import EditTodo from '../EditTodo/EditTodo';
import { useHistory } from 'react-router-dom';
const ListTodo = () => {
  const [todo, setTodo] = useContext(TodoContext);
  const [day] = useContext(DateContext);
  const history = useHistory();
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    console.log('useEffect Hook!!!');
    let unsubscribe;
    if (day) {
      const date = `${format(day, 'dd MM yyyy')}`;

      unsubscribe = firestore
        .collection('todos')
        .where('day', '==', date)
        .onSnapshot(snapshot => {
          console.log('Firebase Snap!');
          setTodos(
            snapshot.docs.map(doc => {
              return {
                id: doc.id,
                date: day,
                title: doc.data().title,
                description: doc.data().description,
                datatime: new Date(),
              };
            }),
          );
        });
    }

    return () => {
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, [day]);

  const redirectClick = todo => {
    setTodo(todo);
    history.push('/todo');
  };

  return (
    <>
      <S.List>
        {todos.map(todo => {
          return (
            <S.ListItem
              key={todo.id}
              onClick={() => {
                redirectClick(todo);
              }}>
              {todo.title} {console.log(format(todo.datatime, 'MMMM yyyy'))}
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
    border: 2px solid green;
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
