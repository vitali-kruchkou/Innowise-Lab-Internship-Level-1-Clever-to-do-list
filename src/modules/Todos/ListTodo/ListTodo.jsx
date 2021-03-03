import React, { useState, useEffect, useContext } from 'react';
import { DateContext, TodoContext } from '@providers/DateProvider';
import { List, Switch } from 'antd';
import { useHistory } from 'react-router-dom';
import { UserContext } from '@providers/UserProvider';
import {
  CloseOutlined,
  CheckOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import Style from './StyledListTodo';
import { Toaster } from 'react-hot-toast';
import {
  updateDone,
  deleteTodoInList,
  filterCompleteTodo,
  unsubscribeFirestore,
} from '@firebaseConfig';

const ListTodo = () => {
  const [, setTodo] = useContext(TodoContext);
  const [day] = useContext(DateContext);
  const history = useHistory();
  const [todos, setTodos] = useState([]);
  const [, setDone] = useState(todos.done);
  const user = useContext(UserContext);

  useEffect(() => {
    let unsubscribe;
    if (day) {
      unsubscribe = unsubscribeFirestore(user, day, setTodos);
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
    updateDone(todo, done);
  };
  const deleteTodo = id => {
    deleteTodoInList(id);
  };

  const handleFilter = () => {
    filterCompleteTodo();
  };

  return (
    <>
      <Toaster />
      <Style.Container>
        <Style.List>
          <List
            dataSource={todos}
            renderItem={todo => (
              <>
                <List.Item key={todo.id}>
                  <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked={todo.done}
                    className={todo.done == true ? 'check' : 'uncheck'}
                    onClick={() => {
                      onChangeDone(todo);
                    }}
                  />
                  <Style.ListItem>
                    <List.Item.Meta
                      className={todo.done ? 'todo-completed' : undefined}
                      title={todo.title}
                      onClick={() => {
                        redirectClick(todo);
                      }}
                    />
                  </Style.ListItem>
                  <DeleteOutlined onClick={() => deleteTodo(todo.id)} />
                </List.Item>
              </>
            )}
          />
        </Style.List>
        <button
          onClick={() => {
            handleFilter(todos);
          }}>
          Clear All Completed
        </button>
      </Style.Container>
    </>
  );
};

export default ListTodo;
