import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TodoContext } from '../../../providers/DateProvider';
import { Form } from 'antd';
import { firestore } from '../../../lib';
import { Checkbox } from 'antd';

export function EditTodoPage() {
  const [todo, setTodo] = useContext(TodoContext);
  const history = useHistory();
  const [title, setTitle] = useState(todo ? todo.title : '');
  const [description, setDescription] = useState(todo ? todo.description : '');
  const [isDone, setDone] = useState(todo.done);
  // useEffect = () => {
  //   firestore.collection('todos').doc(todo.id).update({
  //     title: title,
  //     description: description,
  //     done: doc.data().done,
  //   });
  // };

  const editTodo = event => {
    event.preventDefault();
    firestore.collection('todos').doc(todo.id).update({
      title: title,
      description: description,
      done: isDone,
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
            done: doc.data().done,
          });
      })
      .then(res => {
        console.log('Update!', res);
      });
  };
  const onChange = () => {
    setDone(!isDone);
  };
  // const editTitle = event => {
  //   event.target.value.length > 0 ? setTitle(event.target.value) : setTitle(todo.title);
  // };

  return (
    <>
      <Form>
        <Form.Item>
          <input
            type="text"
            name="title"
            defaultValue={title}
            onChange={event => setTitle(event.target.value)}></input>
        </Form.Item>
        <Form.Item>
          <input
            type="text"
            name="description"
            defaultValue={description}
            onChange={event => setDescription(event.target.value)}></input>
        </Form.Item>
        <Form.Item>
          <Checkbox defaultChecked={isDone} onChange={onChange} />
        </Form.Item>
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
