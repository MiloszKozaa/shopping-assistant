import { useState } from 'react';
import Form from '../components/Form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../models/form/registerSchema';
import TextLink from '../components/TextLink';
import './Register.css';
import { CallApi } from '../../service/api/CallApi';
import Input from '../../components/Input';
import Button from '../../components/Button';

/*
CallApi<{}>(
  'user',
  'POST',
  {
    username: data.username,
    email: data.email,
    password: data.password,
  },
  res => {
    if (res.status === 200) {
      reset({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
    errorMessageSet(res.error);
  },
  err => {
    console.error(err);
  }
);
*/

const Register = () => {
  const [errorMessage, errorMessageSet] = useState('');
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form
      title='register'
      error={errorMessage}
      detail='Join us for free!'
      submit={handleSubmit(onSubmit)}>
      <Input
        id='username'
        label='username'
        placeholder='Jacob123'
        type='text'
        yup={{ ...register('username') }}
        error={errors.username?.message}
      />
      <Input
        id='email'
        label='email'
        placeholder='example@email.com'
        type='text'
        yup={{ ...register('email') }}
        error={errors.email?.message}
      />
      <Input
        id='password'
        label='password'
        placeholder='Minimim 6 characters'
        type='password'
        yup={{ ...register('password') }}
        error={errors.password?.message}
      />
      <Input
        id='confirmPassword'
        label='confirm password'
        placeholder='Type the same password'
        type='password'
        yup={{ ...register('confirmPassword') }}
        error={errors.confirmPassword?.message}
      />
      <Button name='Sign up' />
      <TextLink endpoint='/login'>I'm already have account</TextLink>
    </Form>
  );
};

export default Register;
