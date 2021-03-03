import styled from 'styled-components';

const Style = {
  ContainerRoot: styled.div`
    width: 200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
  `,
  Container: styled.div`
    width: 300px;
    margin: 0 auto;
    @media (max-width: 768px) {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
    }
  `,
  Header: styled.div`
    width: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    & > h1 {
      margin: 0 auto;
    }
    & > button {
      padding-right: 20px;
      margin-left: 10px;
      width: 20px;
      border: none;
      background-color: #f9f6f6;
      border-radius: 40px 40px 40px 40px;
    }
  `,
  Buttons: styled.div`
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    & > button {
      width: 50px;
      background-color: white;
      border: 1px solid gray;
      border-radius: 40px 40px 40px 40px;
    }
  `,
  Icon: styled.span`
  font-size: 30px;S
`,
};

export default Style;
