import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { loginSchema } from '../../models/form/loginSchema';
import { userModel } from '../../models/user/userModel';
import { CallApi, GetApi } from '../../service/api/CallApi';
import Form from '../components/Form';
import TextLink from '../components/TextLink';
import './Login.css';

type loginType = {
  email: string;
  password: string;
};

const Login = () => {
  const [errorMessage, errorMessageSet] = useState('');
  const navigate = useNavigate();

  const { mutate, data, status } = useMutation({
    mutationKey: ['user'],
    mutationFn: (body: loginType) => CallApi('user/login', 'POST', body),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    if (data) {
      if (status === 'success' && data.status === 200) {
        console.log('Navigating to home');
        navigate('/home');
      }
      errorMessageSet(data.error);
    }
  }, [data]);

  const onSubmit = (data: any) => {
    console.log(data);
    mutate(data);
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
          error={errors.email?.message}
          yup={{ ...register('email') }}
        />
        <Input
          id='password'
          label='password'
          type='password'
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
