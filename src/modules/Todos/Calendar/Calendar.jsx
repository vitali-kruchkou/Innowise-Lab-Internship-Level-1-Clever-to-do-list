import React, { useState } from 'react';
import Months from './Months/Months.jsx';
import TheDate from './TheDate/TheDate';
import Style from './StyledCalendar';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <Style.Calendar>
      <Months currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <TheDate currentDate={currentDate} />
    </Style.Calendar>
  );
};

export default Calendar;
