import React from 'react';
import styled from 'styled-components';
import AddTodo from './AddTodo';

export const AddTodoPage = () => {
  return (
    <S.Container>
      <div>
        <AddTodo />
      </div>
    </S.Container>
  );
};

export default AddTodoPage;

const S = {
  Container: styled.div`
    width: 200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    // position: absolute;
    // top: 0;
    // left: 50%;
    // margin-right: -50%;
    // transform: translate(-50%, 0);
  `,
};
