import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { TokenModel } from '../../models/auth/TokenModel';
import { loginSchema } from '../../models/form/loginSchema';
import { CallApi } from '../../service/api/CallApi';
import Button from '../components/Button';
import Form from '../components/Form';
import Input from '../components/Input';
import TextLink from '../components/TextLink';
import './Login.css';

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const [errorMessage, errorMessageSet] = useState('');
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    CallApi<TokenModel>(
      'user/login',
      'POST',
      {
        email: data.email,
        password: data.password,
      },
      res => {
        if (res.status === 200) {
          localStorage.setItem('x-auth-token', res.data.token);
        }
        errorMessageSet(res.error);
        navigate('/');
      },
      err => {
        console.error(err);
      }
    );
  };

  return (
    <div className='login-form'>
      <Form
        title='login'
        detail='Welcome back!'
        submit={handleSubmit(onSubmit)}
        error={errorMessage}>
        <Input
          id='email'
          label='email'
          type='email'
          placeholder='Enter email'
          error={errors.email?.message}
          yup={{ ...register('email') }}
        />
        <Input
          id='password'
          label='password'
          type='password'
          placeholder='Enter password'
          error={errors.password?.message}
          yup={{ ...register('password') }}
        />
        <Button name='Log in' />
      </Form>
      <TextLink endpoint='/register'>I'm not have an account</TextLink>
    </div>
  );
};

export default Login;
