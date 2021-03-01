import React, { useState } from 'react';
import styled from 'styled-components';
import { Months } from './Months/Months.jsx';
import { TheDate } from './TheDate/TheDate';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <S.Calendar>
      <Months currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <TheDate currentDate={currentDate} />
    </S.Calendar>
  );
}

const S = {
  Calendar: styled.div`
    display: block;
    position: relative;
    max-width: 750px;
    margin: 0 auto;
    border-radius: 20px;
    height: auto;
    margin: 30px auto;
    @media (max-width: 768px) {
      max-width: 400px;
      margin: 0 auto;
    }
    @media (max-width: 575px) {
      max-width: 400px;
      max-height: 200px;
      margin: 0 auto;
      margin-top: 20px;
      & > div {
        font-size: 10px;
      }
    }
  `,
};
