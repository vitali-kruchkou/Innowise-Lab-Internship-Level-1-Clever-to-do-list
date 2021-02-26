import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TodoContext } from '../../../providers/DateProvider';
import { Form } from 'antd';
import { firestore } from '../../../lib';

export function EditTodoPage() {
  const [todo, setTodo] = useContext(TodoContext);
  const history = useHistory();
  const [title, setTitle] = useState(todo ? todo.title : '');
  const [description, setDescription] = useState(todo ? todo.description : '');

  const editTodo = event => {
    event.preventDefault();
    firestore.collection('todos').doc(todo.id).update({
      title: title,
      description: description,
    });
    firestore
      .collection('todos')
      .doc(todo.id)
      .get()
      .then(doc => {
        if (doc.exists)
          setTodo({
            id: doc.id,
            title: doc.data().title,
            description: doc.data().description,
          });
      })
      .then(res => {
        console.log('Update!', res);
      });
  };

  // const editTitle = event => {
  //   event.target.value.length > 0 ? setTitle(event.target.value) : setTitle(todo.title);
  // };

  return (
    <>
      <Form>
        <input
          type="text"
          name="title"
          defaultValue={title}
          onChange={event => setTitle(event.target.value)}></input>
        <input
          type="text"
          name="description"
          defaultValue={description}
          onChange={event => setDescription(event.target.value)}></input>
      </Form>
      <button
        onClick={() => {
          history.push('/todo');
        }}>
        {'<'}
      </button>
      <button onClick={editTodo}>{'V'}</button>
    </>
  );
}
export default EditTodoPage;
