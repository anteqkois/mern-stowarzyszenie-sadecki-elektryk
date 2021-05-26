import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { useFormik } from 'formik';

import Button from '../components/utils/Button';
import Input from '../components/form/Input';

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
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;

  h2 {
    text-align: center;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.typography.sizeH4};
    font-weight: ${({ theme }) => theme.typography.weightBold};
  }
`;

const Login = (props) => {
  
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [finished, setFinished] = useState(false);

  const { from } = props.location.state || { from: '/'};

  const formik = useFormik({
    initialValues: {
      login: login,
      password: password,
    },
    onSubmit: (values, { setSubmitting }) => {
      setLogin(values.login);
      setPassword(values.password);
      sessionStorage.setItem('isLogged', true)
      setFinished(true);
    },
  });
  
  if(finished){
    return <Redirect to={from.pathname}/>
  }

  return (
    <StyledLogin>
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

{
  /* <Formik
        initialValues={{ login: login, password: password }}
        onSubmit={(values, { setSubmitting }) => {
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 400);

          setLogin(values.login);
          setPassword(values.password);

          console.log(login, password);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <StyledLoginForm onSubmit={handleSubmit}>
            <h2>Zaloguj się</h2>
            <Input
              type="text"
              name="login"
              handleChange={handleChange}
              label="login"
            />
            <Input
              type="text"
              name="password"
              handleChange={handleChange}
              label="hasło"
            />
            <Button>Zaloguj</Button>
          </StyledLoginForm>
        )}
      </Formik> */
}
