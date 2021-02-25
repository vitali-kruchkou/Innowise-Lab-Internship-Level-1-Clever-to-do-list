/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Link } from '@reach/router';
import { signInWithGoogle } from '../../../lib/index';
import { auth } from '../../../lib/index';
import styled from 'styled-components';
import { Form, Input, Divider } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch(error => {
      setError('Error signing in with password and email!');
      console.error('Error signing in with password and email', error);
    });
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    } else if (name === 'userPassword') {
      setPassword(value);
    }
  };

  return (
    <>
      <S.Container>
        <S.Form>
          <Form>
            <S.Title>Clever Todo List</S.Title>
            <Divider />
            <p>
              Welcome to Clever Todo list.
              <br />
              Please login to your account
            </p>
            <Divider />
            {error !== null && <S.Error>{error}</S.Error>}
            <Form.Item>
              <Input
                type="email"
                name="userEmail"
                value={email}
                placeholder="Your email"
                id="userEmail"
                onChange={event => onChangeHandler(event)}
              />
            </Form.Item>
            <Form.Item>
              <Input.Password
                type="password"
                name="userPassword"
                value={password}
                placeholder="Your Password"
                id="userPassword"
                onChange={event => onChangeHandler(event)}
              />
            </Form.Item>
            <Form.Item>
              <S.Button>
                <button
                  className="SignIn"
                  onClick={event => {
                    signInWithEmailAndPasswordHandler(event, email, password);
                  }}>
                  Login
                </button>
              </S.Button>
              <S.Links>
                <Link to="signUp">
                  <span className="SignUp">Sign up </span>
                </Link>{' '}
                <br />
                <Link to="passwordReset">
                  <span>Forgot Password?</span>
                </Link>
              </S.Links>
            </Form.Item>
            <Divider plain>Or Login Using</Divider>
            <Form.Item>
              <S.Button>
                <button
                  className="Google"
                  onClick={() => {
                    signInWithGoogle();
                  }}>
                  <FontAwesomeIcon icon={faGooglePlusG} />
                  <span>Google</span>
                </button>
              </S.Button>
            </Form.Item>
          </Form>
        </S.Form>
      </S.Container>
    </>
  );
};

export default SignIn;

const S = {
  Container: styled.div`
    // max-width: 750px;
    // margin: 0 auto;
    // margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    margin: 0 auto;
    height: 500px;
    border-radius: 3px;
    padding-top: 20px;
  `,
  Button: styled.div`
    width: 200px;
    & > .SignIn {
      width: 200px;
      background: rgb(151, 11, 221);
      background: linear-gradient(
        90deg,
        rgba(151, 11, 221, 1) 0%,
        rgba(128, 11, 93, 1) 35%,
        rgba(237, 120, 10, 1) 100%
      );
      border: none;
      font-size: 18px;
      height: 30px;
      color: white;
      transition: 0.4s linear;
    }
    & > .SignIn:hover {
      background-color: #e1dfdf;
      color: black;
      border: none;
    }
    & > .Google {
      width: 200px;
      background-color: white;
      border: none;
      font-size: 15px;
      height: 40px;
      transition: 0.4s linear;
    }
    & > .Google:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
    & > .Google > span {
      margin-left: 10px;
    }
  `,
  Form: styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 1px solid black;
    padding: 80px;
    box-shadow: inset 0 0 0 1px #337ab7;
    @media (max-width: 768px) {
      box-shadow: none;
      border: none;
    }
  `,
  Title: styled.span`
    font-size: 30px;
    font-style: italic;
  `,
  Links: styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-between;
    margin: 20px 0;
    & > Link {
      color: black;
    }
    & > Link > .SignUp {
      border: 1px solid black;
    }
  `,
  Error: styled.span`
    color: red;
  `,
};
