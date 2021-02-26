import React, { useContext } from 'react';

import { TodoContext } from '../../../providers/DateProvider';
import { firestore } from '../../../lib/index';
import { useHistory } from 'react-router-dom';

function EditTodo() {
  const [todo] = useContext(TodoContext);
  const deleteTodo = id => {
    firestore
      .collection('todos')
      .doc(id)
      .delete()
      .then(res => {
        console.log('Deleted!', res);
      });
  };
  const history = useHistory();
  return (
    <>
      {' '}
      <button
        onClick={() => {
          history.push('/');
        }}>
        {'<'}
      </button>
      {console.log(todo)}
      <p> {todo.title}</p>
      <p>{todo.description}</p>
      <button onClick={() => deleteTodo(todo.id)}>Delete Todo</button>
      <button onClick={() => history.push('/edittodo')}>Edit Todo</button>
    </>
  );
}

export default EditTodo;
