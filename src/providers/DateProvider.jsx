import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const DateContext = createContext({ date: null });

export function DateProvider(props) {
  const [date, setDate] = useState(null);

  return (
    <DateContext.Provider value={[date, setDate]}>
      {props.children}
    </DateContext.Provider>
  );
}

export default DateProvider;

DateProvider.propTypes = {
  children: PropTypes.object,
};
