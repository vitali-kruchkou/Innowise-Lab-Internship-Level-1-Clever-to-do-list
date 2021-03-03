import { format } from 'date-fns';
import React, { createContext, useState } from 'react';

export const TodoContext = createContext({ todo: null });
export const DateContext = createContext();

const today = format(new Date(), 'dd MM yyyy');
const DateProvider = props => {
  const [date, setDate] = useState(today);
  const [todo, setTodo] = useState(null);
  return (
    <DateContext.Provider value={[date, setDate]}>
      <TodoContext.Provider value={[todo, setTodo]}>
        {props.children}
      </TodoContext.Provider>
    </DateContext.Provider>
  );
};

export default DateProvider;
