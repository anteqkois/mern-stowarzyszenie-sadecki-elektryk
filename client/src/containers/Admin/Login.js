import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { useFormik } from 'formik';

import useError, { ErrorContext} from '../../hooks/useError';
import Button from '../../components/utils/Button';
import Input from '../../components/form/Input';

import * as authorizationAPI from '../../helpers/authorizationAPI.js';

const StyledLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 70px;
  width: 100vw;
  height: calc(100vh - 70px);
  background: ${({ theme }) => theme.colors.gradient};
  z-index: ${({ theme }) => theme.zIndex.level2};

  ${({ theme }) => theme.media.tablet} {
    top: 0;
    height: 100vh;
  }
`;

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 30px 30px;
  height: 400px;
  width: 300px;
  width: clamp(300px, 90%, 350px);
  box-shadow: 5px 15px 20px rgba(0, 0, 0, 0.5);
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  
  h2 {
    text-align: center;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.typography.sizeH4};
    font-weight: ${({ theme }) => theme.typography.weightBold};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Login = (props) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [finished, setFinished] = useState(false);

  const { ErrorComponent } = useContext(ErrorContext);

  const setError= useError('/login');
  
  const { from } = props.location.state || { from: '/' };
  
  const handleLogin = (values)=>{
    (async () => {
      try {
        const body = {
          login: values.login,
          password: values.password,
        };
    
        // Tokeny zapisane w ciasteczkach !
        await authorizationAPI.login(body);
    
        sessionStorage.setItem('isLogined', true)
        setFinished(true);
      } catch (error) {
        setError(error.response.data);
      }
    })();
  }

  const formik = useFormik({
    initialValues: {
      login: login,
      password: password,
    },
    onSubmit: (values, { setSubmitting }) => {
      setLogin(values.login);
      setPassword(values.password);
      handleLogin(values);
    },
  });

  if (finished) {
    return <Redirect to={from.pathname} />;
  }

  return (
    <StyledLogin>
      <ErrorComponent />
      <StyledLoginForm onSubmit={formik.handleSubmit}>
        <h2>Zaloguj się</h2>
        <Input
          type="text"
          name="login"
          handleChange={formik.handleChange}
          label="login"
        />
        <Input
          type="password"
          name="password"
          handleChange={formik.handleChange}
          label="hasło"
        />
        <Button>Zaloguj</Button>
      </StyledLoginForm>
    </StyledLogin>
  );
};

export default Login;