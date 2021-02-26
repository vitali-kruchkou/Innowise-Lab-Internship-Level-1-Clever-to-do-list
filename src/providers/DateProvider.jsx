import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const TodoContext = createContext({ todo: null });
export const DateContext = createContext({ date: null });

export function DateProvider(props) {
  const [date, setDate] = useState(null);
  const [todo, setTodo] = useState(null);
  return (
    <DateContext.Provider value={[date, setDate]}>
      <TodoContext.Provider value={[todo, setTodo]}>
        {props.children}
      </TodoContext.Provider>
    </DateContext.Provider>
  );
}

export default DateProvider;

DateProvider.propTypes = {
  children: PropTypes.object,
};
