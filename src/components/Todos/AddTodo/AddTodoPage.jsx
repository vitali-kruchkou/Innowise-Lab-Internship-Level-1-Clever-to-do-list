import React from 'react';
import { useHistory } from 'react-router-dom';
import AddTodo from './AddTodo';

export const AddTodoPage = () => {
  const history = useHistory();
  return (
    <div>
      <AddTodo />
      <button
        onClick={() => {
          history.push('/');
        }}>
        {'<'}
      </button>
    </div>
  );
};

export default AddTodoPage;
