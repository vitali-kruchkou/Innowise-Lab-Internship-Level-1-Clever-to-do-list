/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { firestore } from '../../../lib/index';
import styled from 'styled-components';
import {
  DeleteOutlined,
  EditOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';
import { format } from 'date-fns';
import { DateContext, TodoContext } from '../../../providers/DateProvider';
import { Card, Checkbox, List } from 'antd';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../providers/UserProvider';

const ListTodo = () => {
  const [, setTodo] = useContext(TodoContext);
  const [day] = useContext(DateContext);
  const history = useHistory();
  const [todos, setTodos] = useState([]);
  const [, setDone] = useState(todos.done);
  const user = useContext(UserContext);
  useEffect(() => {
    console.log('useEffect Hook!!!');
    let unsubscribe;
    if (day) {
      const date = `${format(day, 'dd MM yyyy')}`;

      unsubscribe = firestore
        .collection('todos')
        .where('userId', '==', user.uid)
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
                done: doc.data().done,
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

  const onChangeDone = todo => {
    let done = !todo.done;
    setDone(!done);
    console.log(done);
    firestore.collection('todos').doc(todo.id).update({
      done: done,
    });
  };

  return (
    // <>
    //   <S.List>
    //     {todos.map(todo => {
    //       return (
    //         <>
    //           <Checkbox
    //             defaultChecked={todo.done}
    //             onClick={() => {
    //               onChangeDone(todo);
    //             }}
    //           />
    //           <S.ListItem
    //             key={todo.id}
    //             onClick={() => {
    //               redirectClick(todo);
    //             }}>
    //             {todo.title}
    //             {todo.done !== false ? (
    //               <CheckCircleOutlined />
    //             ) : (
    //               <CloseCircleOutlined />
    //             )}
    //           </S.ListItem>
    //         </>
    //       );
    //     })}
    //   </S.List>
    // </>
    <S.List>
      <List
        dataSource={todos}
        renderItem={todo => (
          <>
            <List.Item key={todo.id}>
              <Checkbox
                defaultChecked={todo.done}
                onClick={() => {
                  onChangeDone(todo);
                }}
              />
              <S.ListItem>
                <List.Item.Meta
                  title={todo.title}
                  description={todo.description}
                  onClick={() => {
                    redirectClick(todo);
                  }}
                />
              </S.ListItem>
              {todo.done !== false ? (
                <CheckCircleOutlined />
              ) : (
                <CloseCircleOutlined />
              )}
            </List.Item>
          </>
        )}
      />
    </S.List>
  );
};

export default ListTodo;

const S = {
  List: styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 600px;
    margin: 0 auto;
  `,
  ListItem: styled.div`
    margin: 0 auto;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    width: 200px;
    text-align: center;
  `,
};
