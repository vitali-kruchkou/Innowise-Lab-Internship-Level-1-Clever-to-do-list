/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';

import {
  auth,
  signInWithGoogle,
  generateUserDocument,
} from '../../../lib/index';
import styled from 'styled-components';
import { Form, Input, Divider, Tooltip } from 'antd';
import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password,
  ) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );
      generateUserDocument(user, { displayName });
    } catch (error) {
      setError('Error Signing up with email and password');
      console.log(error.message);
    }

    setEmail('');
    setPassword('');
    setDisplayName('');
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    } else if (name === 'userPassword') {
      setPassword(value);
    } else if (name === 'displayName') {
      setDisplayName(value);
    }
  };

  return (
    <>
      <S.Container>
        <S.Form>
          <Form>
            <S.Title>Sign Up</S.Title>
            {error !== null && <S.Error>{error}</S.Error>}
            <Form.Item>
              <Input
                type="text"
                name="displayName"
                value={displayName}
                placeholder="E.g: Faruq"
                id="displayName"
                onChange={event => onChangeHandler(event)}
                prefix={<UserOutlined />}
                suffix={
                  <Tooltip title="Extra information">
                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                  </Tooltip>
                }
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="email"
                name="userEmail"
                value={email}
                placeholder="E.g: faruq123@gmail.com"
                id="userEmail"
                onChange={event => onChangeHandler(event)}
                prefix={<UserOutlined />}
                suffix={
                  <Tooltip title="Extra information">
                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                  </Tooltip>
                }
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
                suffix={
                  <Tooltip title="Extra information">
                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                  </Tooltip>
                }
              />
            </Form.Item>
            <Form.Item>
              <S.Button>
                <button
                  className="SignUp"
                  onClick={event => {
                    createUserWithEmailAndPasswordHandler(
                      event,
                      email,
                      password,
                    );
                  }}>
                  Sign up
                </button>
              </S.Button>
              <S.Links>
                <p> Already have an account?</p>
                <Link to="/signIn">Sign in</Link>
              </S.Links>
            </Form.Item>
            <Divider plain>Or SignUp Using</Divider>
            <Form.Item>
              <S.Button>
                <button
                  onClick={() => {
                    try {
                      signInWithGoogle();
                    } catch (error) {
                      console.error('Error signing in with Google', error);
                    }
                  }}>
                  Sign In with Google
                </button>
              </S.Button>
            </Form.Item>
          </Form>
        </S.Form>
      </S.Container>
    </>
  );
};

export default SignUp;

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
    & > .SignUp {
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
    & > .SignUp:hover {
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
  Title: styled.div`
    font-size: 30px;
    font-style: italic;
    padding-bottom: 30px;
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
  `,
  Error: styled.span`
    color: red;
  `,
  Toast: styled.div`
    color: red;
  `,
};
