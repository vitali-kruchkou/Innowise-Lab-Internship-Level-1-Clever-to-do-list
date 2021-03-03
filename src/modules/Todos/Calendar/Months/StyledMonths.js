import styled from 'styled-components';

const Style = {
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
    color: #b629fd;
  `,
  HeaderCellAnlge: styled.span`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    font-size: 20px;
    font-weight: bold;
    width: 30px;
    background: #b629fd;
    border-radius: 50%;
    color: white;
  `,
};

export default Style;
