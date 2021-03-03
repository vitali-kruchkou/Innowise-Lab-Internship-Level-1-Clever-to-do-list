import styled from 'styled-components';

const Style = {
  ContainerRoot: styled.div`
    width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    @media (max-width: 760px) {
      width: 300px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
    }
  `,
  HeaderRoot: styled.div`
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
  ButtonsRoot: styled.div`
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & > button {
      width: 50px;
      background-color: white;
      border: 1px solid gray;
      border-radius: 40px 40px 40px 40px;
    }
  `,
  Main: styled.div`
    & > p {
      color: #5c5c5c;
    }
  `,
  CheckboxTrue: styled.div`
    border-radius: 40px 40px 40px 40px;
    width: 120px;
    background-color: #73fa85;
  `,
  CheckboxFalse: styled.div`
    border-radius: 40px 40px 40px 40px;
    width: 120px;
    background-color: #f95056;
  `,
  Container: styled.div`
    max-width: 400px;
    max-height: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space around;
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
