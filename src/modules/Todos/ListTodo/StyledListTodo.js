import styled from 'styled-components';

const Style = {
  Container: styled.div`
    width: 600px;
    max-height: 500px;
    margin: 20px auto;
    // background-color: rgb(243, 243, 243);
    @media (max-width: 767px) {
      overflow: scroll;
      max-width: 400px;
      max-height: 300px;
      margin-top: 20px;
      margin-bottom: 40px;
    }
    @media (max-width: 575px) {
      overflow: scroll;
      max-width: 300px;
      max-height: 200px;
      margin: 30px auto;
    }
  `,
  List: styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
  `,
  ListItem: styled.div`
    margin: 0 auto;
    border: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    width: 200px;
    text-align: center;
    background-color: white;
    @media (max-width: 575px) {
      max-width: 100px;
      margin: 0 auto;
    }
  `,
};

export default Style;
