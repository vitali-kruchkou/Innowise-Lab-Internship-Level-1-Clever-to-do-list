import React, { useContext, useEffect, useState } from 'react';

import { TodoContext } from '../../../providers/DateProvider';
import { firestore } from '../../../lib/index';
import { useHistory } from 'react-router-dom';
import { Checkbox } from 'antd';

function EditTodo() {
  const [todo] = useContext(TodoContext);
  const [isDone, setDone] = useState(todo.done);
  const history = useHistory();

  useEffect(() => {
    firestore.collection('todos').doc(todo.id).update({
      done: isDone,
    });
  });

  const deleteTodo = id => {
    firestore
      .collection('todos')
      .doc(id)
      .delete()
      .then(res => {
        console.log('Deleted!', res);
      });
  };
  const onChange = () => {
    setDone(!isDone);
  };
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
      {todo.done !== false ? (
        <>
          <Checkbox defaultChecked={todo.done} onChange={onChange} />
        </>
      ) : (
        <Checkbox defaultChecked={todo.done} onChange={onChange} />
      )}
    </>
  );
}

export default EditTodo;
