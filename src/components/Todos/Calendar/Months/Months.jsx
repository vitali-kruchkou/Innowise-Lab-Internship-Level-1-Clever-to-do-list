import React from 'react';
import { addMonths, format, subMonths } from 'date-fns';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
export function Months({ currentDate, setCurrentDate }) {
  const dateFormat = 'MMMM yyyy';

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  return (
    <S.Header>
      <S.HeaderCellAnlge onClick={prevMonth}>
        {/* <FontAwesomeIcon icon={faAngleLeft} /> */}
        <LeftOutlined />
      </S.HeaderCellAnlge>
      <S.HeaderCell>
        <span>{format(currentDate, dateFormat)}</span>
      </S.HeaderCell>
      <S.HeaderCellAnlge onClick={nextMonth}>
        <RightOutlined />
      </S.HeaderCellAnlge>
    </S.Header>
  );
}

Months.propTypes = {
  currentDate: PropTypes.number,
  setCurrentDate: PropTypes.func,
};

const S = {
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
  HeaderCellAnlge: styled.span`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    font-size: 20px;
    font-weight: bold;
    width: 30px;
    background: #464cee;
    border-radius: 50%;
  `,
};
