/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Link } from '@reach/router';
import { signInWithGoogle } from '../../../lib/index';
import { auth } from '../../../lib/index';
import styled from 'styled-components';
import { Form, Input } from 'antd';
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

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  return (
    <>
      <S.Container>
        <Form>
          <S.Form {...layout}>
            <S.Title>Clever Todo List</S.Title>
            {error !== null && <div>{error}</div>}
            <S.FormLabel>
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
            </S.FormLabel>
            <S.FormLabel>
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
            </S.FormLabel>
            <Form.Item>
              <S.Button>
                <button
                  className="SignIn"
                  onClick={event => {
                    signInWithEmailAndPasswordHandler(event, email, password);
                  }}>
                  Sign in
                </button>
              </S.Button>
            </Form.Item>
            <p>or</p>
            <Form.Item>
              <S.Button>
                <button
                  className="Google"
                  onClick={() => {
                    signInWithGoogle();
                  }}>
                  <FontAwesomeIcon icon={faGooglePlusG} />
                  Sign in with Google
                </button>
              </S.Button>
            </Form.Item>
            <Form.Item>
              <p>
                Don't have an account ? <Link to="signUp">Sign up </Link> <br />{' '}
                <Link
                  to="passwordReset"
                  className="text-blue-500 hover:text-blue-600">
                  Forgot Password?
                </Link>
              </p>
            </Form.Item>
          </S.Form>
        </Form>
      </S.Container>
    </>
  );
};

export default SignIn;

const S = {
  Container: styled.div`
    max-width: 750px;
    margin: 0 auto;
    margin-top: 50px;
  `,
  Button: styled.div`
    width: 200px;
    & > button {
      width: 200px;
    }
    & > .SignIn {
      background-color: #12fc31;
      border: none;
      font-size: 18px;
      height: 30px;
      color: white;
    }
    & > .SignIn:hover {
      background-color: #24d53b;
      border: none;
    }
    & > .Google {
      background-color: #3982ff;
      color: white;
      border: none;
      font-size: 18px;
      height: 30px;
    }
    & > .Google:hover {
      background-color: blue;
      border: none;
    }
  `,
  Form: styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
    align-items: center;
    text-align: center;
  `,
  Title: styled.span`
    font-size: 30px;
    font-style: italic;
  `,
  FormLabel: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
  `,
};
