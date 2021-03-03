import React from 'react';
import { addMonths, format, subMonths } from 'date-fns';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import Style from './StyledMonths';

const Months = ({ currentDate, setCurrentDate }) => {
  const dateFormat = 'MMMM yyyy';

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  return (
    <Style.Header>
      <Style.HeaderCellAnlge onClick={prevMonth}>
        <LeftOutlined />
      </Style.HeaderCellAnlge>
      <Style.HeaderCell>
        <span>{format(currentDate, dateFormat)}</span>
      </Style.HeaderCell>
      <Style.HeaderCellAnlge onClick={nextMonth}>
        <RightOutlined />
      </Style.HeaderCellAnlge>
    </Style.Header>
  );
};

export default Months;
