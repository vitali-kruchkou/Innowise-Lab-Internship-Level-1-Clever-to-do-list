import React from 'react';
import Style from './StyledAddTodo';
import AddTodo from './AddTodo';

const AddTodoPage = () => {
  return (
    <Style.ContainerRoot>
      <div>
        <AddTodo />
      </div>
    </Style.ContainerRoot>
  );
};

export default AddTodoPage;
