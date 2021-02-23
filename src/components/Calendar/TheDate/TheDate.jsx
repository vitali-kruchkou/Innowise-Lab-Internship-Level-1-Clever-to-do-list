import React, { useState } from 'react';
import styled from 'styled-components';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import PropTypes from 'prop-types';
import {
  addDays,
  format,
  getDate,
  isSameDay,
  isSameMonth,
  lastDayOfMonth,
  startOfMonth,
} from 'date-fns';

export function TheDate({ currentDate }) {
  // eslint-disable-next-line no-unused-vars
  const [selectedDate, setSelectedDate] = useState(new Date());

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
        <S.Days
          className={`${
            !isSameMonth(day, monthStart)
              ? 'disabled'
              : isSameDay(day, selectedDate)
              ? 'selected'
              : ''
          }`}
          key={day}
          onClick={() => onDateClick(cloneDay)}>
          <S.DaysOfWeek>{daysOfWeek[day.getDay()]}</S.DaysOfWeek>
          <span>{formattedDate}</span>
        </S.Days>,
      );
      day = addDays(day, 1);
    }
    return days;
  };

  const onDateClick = day => {
    setSelectedDate(day);
    console.log(day);
  };

  return (
    <S.Scroll>
      <ScrollMenu data={Cells()} alignCenter={false} />
    </S.Scroll>
  );
}

TheDate.propTypes = {
  currentDate: PropTypes.number,
};

const S = {
  Days: styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 10px;
    margin-right: 10px;
    font-size: 20px;
    width: 36px;
    &:hover {
      border-radius: 30%;
      background-color: #04083d;
      color: white;
    }
    &:active {
      border: 1px solid orange;
      border-radius: 30%;
      background-color: white;
      color: orange;
    }
  `,
  DaysOfWeek: styled.span`
    font-size: 15px;
    color: ligthgray;
  `,
  Scroll: styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 10px 10px;
  `,
};
