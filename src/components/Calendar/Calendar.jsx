import React, { useState } from 'react';
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  isSameMonth,
  isSameDay,
  subMonths,
  addMonths,
  lastDayOfMonth,
  getDate,
} from 'date-fns';
// import './CalendarStyle.css';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const onDateClick = day => {
    setSelectedDate(day);
  };

  const header = () => {
    const dateFormat = 'MMMM yyyy';
    return (
      <S.Header>
        <S.HeaderCell>
          <FontAwesomeIcon icon={faAngleLeft} onClick={prevMonth} />
        </S.HeaderCell>
        <S.HeaderCell>
          <span>{format(currentDate, dateFormat)}</span>
        </S.HeaderCell>
        <S.HeaderCell>
          <FontAwesomeIcon icon={faAngleRight} onClick={nextMonth} />
        </S.HeaderCell>
      </S.Header>
    );
  };

  const cells = () => {
    const monthStart = startOfMonth(currentDate);
    // const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    // const endDate = endOfWeek(monthEnd);
    const lastDayOfThisMonth = getDate(lastDayOfMonth(currentDate));

    const dateFormat = 'd';
    // const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    for (let i = 0; i <= lastDayOfThisMonth; i++) {
      formattedDate = format(day, dateFormat);
      const cloneDay = day;
      days.push(
        <div
          className={`column cell ${
            !isSameMonth(day, monthStart)
              ? 'disabled'
              : isSameDay(day, selectedDate)
              ? 'selected'
              : ''
          }`}
          key={day}
          onClick={() => onDateClick(cloneDay)}>
          <S.Days>{formattedDate}</S.Days>
          {/* <span className="bg">{formattedDate}</span> */}
        </div>,
      );
      day = addDays(day, 1);
      // rows.push(
      //   <div className="row" key={day}>
      //     {' '}
      //     {days}{' '}
      //   </div>,
      // );
      // days = [];
      // console.log(rows);
    }
    return days;
  };

  return (
    <S.Calendar>
      {header()}
      {/* <div>{cells()}</div> */}
      <S.Scroll>
        <ScrollMenu data={cells()} />
      </S.Scroll>
    </S.Calendar>
  );
}

const S = {
  Calendar: styled.div`
    display: block;
    position: relative;
    max-width: 750px;
    background: orange;
    border: 1px solid lightgray;
    border-radius: 20px;
    height: auto;
    margin: 30px auto;
  `,
  Header: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid lightgray;
    background: white;
    margin: 0 auto;
  `,
  HeaderCell: styled.span`
    margin: 0 auto;
    font-size: 20px;
    font-weight: bold;
  `,
  Scroll: styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 10px 10px;
  `,
  Days: styled.span`
    padding: 10px 10px;
    font-size: 20px;
  `,
};
