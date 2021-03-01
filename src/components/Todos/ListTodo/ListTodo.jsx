/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { firestore } from '../../../lib/index';
import styled from 'styled-components';
import { DateContext, TodoContext } from '../../../providers/DateProvider';
import { List, Switch } from 'antd';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../providers/UserProvider';
import {
  CloseOutlined,
  CheckOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

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
      // const date = `${format(day, 'dd MM yyyy')}`;
      unsubscribe = firestore
        .collection('todos')
        .where('userId', '==', user.uid)
        .where('day', '==', day)
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
  const deleteTodo = id => {
    firestore
      .collection('todos')
      .doc(id)
      .delete()
      .then(res => {
        console.log('Deleted!', res);
      });
  };

  const handleFilter = todos => {
    // let filtered = todos.filter(todo => {
    //   return !todo.done;
    // });
    // setTodos(filtered);
    var filtered = firestore
      .collection('todos')
      .where('done', '==', true)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          doc.ref
            .delete()
            .then(() => {
              console.log('Document successfully deleted!');
            })
            .catch(function (error) {
              console.error('Error removing document: ', error);
            });
        });
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
    <S.Container>
      <S.List>
        <List
          dataSource={todos}
          renderItem={todo => (
            <>
              <List.Item key={todo.id}>
                {/* <Checkbox
                  defaultChecked={todo.done}
                  onClick={() => {
                    onChangeDone(todo);
                  }}
                /> */}
                <Switch
                  checkedChildren={<CheckOutlined />}
                  unCheckedChildren={<CloseOutlined />}
                  defaultChecked={todo.done}
                  className={todo.done == true ? 'check' : 'uncheck'}
                  onClick={() => {
                    onChangeDone(todo);
                  }}
                />
                <S.ListItem>
                  <List.Item.Meta
                    className={todo.done ? 'todo-completed' : undefined}
                    title={todo.title}
                    onClick={() => {
                      redirectClick(todo);
                    }}
                  />
                </S.ListItem>
                {/* {todo.done !== false ? (
                  <CheckCircleOutlined />
                ) : (
                  <CloseCircleOutlined />
                )} */}
                <DeleteOutlined onClick={() => deleteTodo(todo.id)} />
              </List.Item>
            </>
          )}
        />
      </S.List>
      <button
        onClick={() => {
          handleFilter(todos);
        }}>
        Clear All Completed
      </button>
    </S.Container>
  );
};

export default ListTodo;

const S = {
  Container: styled.div`
    width: 600px;
    max-height: 500px;
    margin: 20px auto;
    background-color: rgb(243, 243, 243);
    @media (max-width: 767px) {
      overflow: scroll;
      max-width: 400px;
      max-height: 300px;
      margin-top: 20px;
      margin-bottom: 40px;
    }
    @media (max-width: 575px) {
      overflow: scroll;
      max-width: 300px;
      max-height: 200px;
      margin: 30px auto;
    }
  `,
  List: styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
  `,
  ListItem: styled.div`
    margin: 0 auto;
    border: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    width: 200px;
    text-align: center;
    background-color: white;
    @media (max-width: 575px) {
      max-width: 100px;
      margin: 0 auto;
    }
  `,
};
