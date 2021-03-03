import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '@providers/DateProvider';
import { useHistory } from 'react-router-dom';
import { Checkbox } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Toaster } from 'react-hot-toast';
import Style from './StyledEditTodo';
import { deleteTodoInList, updateDone } from '@firebaseConfig';

const EditTodo = () => {
  const [todo] = useContext(TodoContext);
  const [isDone, setDone] = useState(todo.done);
  const history = useHistory();

  useEffect(() => {
    updateDone(todo, isDone);
  });

  const deleteTodo = id => {
    deleteTodoInList(id);
    setTimeout(() => {
      history.goBack();
    }, 2000);
  };
  const onChange = () => {
    setDone(!isDone);
  };
  return (
    <>
      <Toaster />
      <Style.ContainerRoot>
        <Style.HeaderRoot>
          <button
            onClick={() => {
              history.push('/');
            }}>
            {'<'}
          </button>
          <h1>Todo</h1>
        </Style.HeaderRoot>
        <Style.Main>
          <h2> {todo.title}</h2>
          <p>{todo.description}</p>
        </Style.Main>
        <Style.ButtonsRoot>
          <button onClick={() => deleteTodo(todo.id)}>
            <DeleteOutlined />
          </button>
          <button onClick={() => history.push('/edittodo')}>
            <EditOutlined />
          </button>
          <Style.CheckboxTrue>
            <Checkbox defaultChecked={todo.done} onChange={onChange}>
              Complete
            </Checkbox>
          </Style.CheckboxTrue>
        </Style.ButtonsRoot>
      </Style.ContainerRoot>
    </>
  );
};

export default EditTodo;
