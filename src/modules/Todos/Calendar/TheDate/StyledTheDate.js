import styled from 'styled-components';

const Style = {
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

export default Style;
