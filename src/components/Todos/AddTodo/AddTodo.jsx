/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { firestore } from '../../../lib/index';
import { Button, Form, Input, Checkbox } from 'antd';
// import styled from 'styled-components';
import { DateContext } from '../../../providers/DateProvider';
import { format } from 'date-fns';
import { UserContext } from '../../../providers/UserProvider';
const AddTodo = () => {
  const [day] = useContext(DateContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const user = useContext(UserContext);
  const addTodo = event => {
    const date = `${format(day, 'dd MM yyyy')}`;
    event.preventDefault();
    firestore.collection('todos').add({
      userId: user.uid,
      title: title,
      description: description,
      day: date,
      done: false,
    });
    setTitle('');
    setDescription('');
  };

  return (
    <>
      <h1>Add Todo</h1>
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
          <Input
            type="text"
            id="todoDescription"
            name="todo"
            value={description}
            placeholder="Description"
            onChange={event => setDescription(event.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={addTodo}>
            AddTodo
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddTodo;
