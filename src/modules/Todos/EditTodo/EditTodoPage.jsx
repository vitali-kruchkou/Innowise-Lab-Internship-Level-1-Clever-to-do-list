import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TodoContext } from '@providers/DateProvider';
import { Form, Input } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Toaster } from 'react-hot-toast';
import Style from './StyledEditTodo';
import { editTodoInList } from '@firebaseConfig';

const EditTodoPage = () => {
  const [todo, setTodo] = useContext(TodoContext);
  const history = useHistory();
  const [title, setTitle] = useState(todo ? todo.title : '');
  const [description, setDescription] = useState(todo ? todo.description : '');

  const editTodo = event => {
    editTodoInList(event, todo, setTodo, title, description);
    setTimeout(() => {
      history.push('/todo');
    }, 2000);
  };

  const cancelEdit = () => {
    history.push('/');
  };

  const editTitle = event => {
    setTitle(event.target.value);
  };

  const editDescription = event => {
    setDescription(event.target.value);
  };

  return (
    <>
      <Toaster />
      <Style.Container>
        <Form>
          <Style.Header>
            <h1>Edit Todo</h1>
          </Style.Header>
          <Form.Item>
            <Input
              name="title"
              defaultValue={title}
              onChange={editTitle}></Input>
          </Form.Item>
          <Form.Item>
            <Input.TextArea
              rows={14}
              name="description"
              defaultValue={description}
              onChange={editDescription}
            />
          </Form.Item>
        </Form>
        <Style.Buttons>
          <Style.Icon>
            <CloseCircleOutlined onClick={cancelEdit} />
          </Style.Icon>
          <Style.Icon>
            <CheckCircleOutlined onClick={editTodo} />
          </Style.Icon>
        </Style.Buttons>
      </Style.Container>
    </>
  );
};

export default EditTodoPage;
