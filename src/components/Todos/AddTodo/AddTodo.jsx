/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { firestore } from '../../../lib/index';
import { Button, Form, Input } from 'antd';
// import styled from 'styled-components';
import { DateContext } from '../../../providers/DateProvider';
import { format } from 'date-fns';
const AddTodo = () => {
  const [day] = useContext(DateContext);
  const [input, setInput] = useState('');

  const addTodo = event => {
    const date = `${format(day, 'dd MM yyyy')}`;
    event.preventDefault();
    firestore.collection('todos').add({
      todo: input,
      day: date,
    });
    setInput('');
  };

  return (
    <Form>
      <Form.Item>
        <Input.TextArea
          id="todo"
          name="todo"
          value={input}
          onChange={event => setInput(event.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={addTodo}>
          AddTodo
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddTodo;
