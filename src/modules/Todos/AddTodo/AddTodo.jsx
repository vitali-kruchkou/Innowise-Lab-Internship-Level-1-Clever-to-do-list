import React, { useState, useContext } from 'react';
import { Form, Input } from 'antd';
import { DateContext } from '@providers/DateProvider';
import { UserContext } from '@providers/UserProvider';
import { useHistory } from 'react-router-dom';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import toast, { Toaster } from 'react-hot-toast';
import Style from './StyledAddTodo';
import { addTodoInList } from '@firebaseConfig';

const AddTodo = () => {
  const [day] = useContext(DateContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const user = useContext(UserContext);
  const history = useHistory();

  const addTodo = event => {
    addTodoInList(event, user, title, description, day);
    setTitle('');
    setDescription('');
    toast.success('Add in your list');
  };

  const cancelEdit = () => {
    history.push('/');
  };

  const changeTitle = event => {
    setTitle(event.target.value);
  };

  const changeDescription = event => {
    setDescription(event.target.value);
  };

  const goBack = () => {
    history.push('/');
  };

  return (
    <>
      <Toaster />
      <Style.Container>
        <Style.Header>
          <span onClick={goBack}>{'<'}</span>
          <h1>Add Todo</h1>
        </Style.Header>
        <Form>
          <Form.Item>
            <Input
              type="text"
              id="todoTitle"
              name="todo"
              value={title}
              placeholder="Title"
              onChange={changeTitle}
            />
          </Form.Item>
          <Form.Item>
            <Input.TextArea
              type="text"
              id="todoDescription"
              name="todo"
              value={description}
              placeholder="Description"
              onChange={changeDescription}
            />
          </Form.Item>
          <Form.Item>
            <Style.Buttons>
              <Style.Icon>
                <CloseCircleOutlined onClick={cancelEdit} />
              </Style.Icon>
              <Style.Icon>
                <CheckCircleOutlined onClick={addTodo} />
              </Style.Icon>
            </Style.Buttons>
          </Form.Item>
        </Form>
      </Style.Container>
    </>
  );
};

export default AddTodo;
