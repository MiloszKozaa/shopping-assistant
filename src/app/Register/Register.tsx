import { useState } from 'react';
import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../models/form/registerSchema';
import TextLink from '../components/TextLink';
import './Register.css';
import { PostApi } from '../../service/api/CallApi';

const Register = () => {
  const [error, errorSet] = useState('');
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
    PostApi(
      'user',
      {
        username: data.username,
        email: data.email,
        password: data.password,
      },
      res => {
        console.log(res);
        reset({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
        errorSet('');
      },
      err => {
        console.error(err);
        // errorSet(err);
      }
    );
  };

  return (
    <div className='register-form'>
      <Form
        title='register'
        error={error}
        detail='Join us for free!'
        submit={handleSubmit(onSubmit)}>
        <Input
          id='username'
          label='username'
          placeholder='username'
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
          error={errors.password?.message}
        />
        <Button name='Sign up' />
      </Form>
      <TextLink endpoint='/login'>I'm already have account</TextLink>
    </div>
  );
};

export default Register;
