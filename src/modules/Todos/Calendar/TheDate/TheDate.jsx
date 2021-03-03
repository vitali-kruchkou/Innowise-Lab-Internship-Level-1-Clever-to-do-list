import React, { useContext, useEffect, useState } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Style from './StyledTheDate';

import {
  addDays,
  format,
  getDate,
  isSameDay,
  isSameMonth,
  lastDayOfMonth,
  startOfMonth,
} from 'date-fns';
import { DateContext } from '../../../../providers/DateProvider';

const TheDate = props => {
  //Scroll to this day
  const scrollToDate = () => {
    let selectedDay = document.querySelector('.selected');
    selectedDay.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    return scrollToDate();
  }, []);

  const { currentDate } = props;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [, setDate] = useContext(DateContext);

  const onDateClick = day => {
    setSelectedDate(day);
    setDate(format(day, 'dd MM yyyy'));
  };

  const Cells = () => {
    const monthStart = startOfMonth(currentDate);
    const startDate = startOfMonth(monthStart);

    const lastDayOfThisMonth = getDate(lastDayOfMonth(currentDate));
    const daysOfWeek = ['Sat', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sun'];
    const dateFormat = 'd';
    let days = [];
    let day = startDate;
    let formattedDate = '';

    for (let i = 0; i < lastDayOfThisMonth; i++) {
      formattedDate = format(day, dateFormat);
      const cloneDay = day;
      days.push(
        <Style.Days
          className={`${
            !isSameMonth(day, monthStart)
              ? 'disabled'
              : isSameDay(day, selectedDate)
              ? 'selected'
              : ''
          }`}
          key={day}
          onClick={() => onDateClick(cloneDay)}>
          <Style.DaysOfWeek>{daysOfWeek[day.getDay()]}</Style.DaysOfWeek>
          <span>{formattedDate}</span>
        </Style.Days>,
      );
      day = addDays(day, 1);
    }
    return days;
  };

  return (
    <Style.Scroll>
      <ScrollMenu data={Cells()} alignCenter={false} />
    </Style.Scroll>
  );
};

export default TheDate;
