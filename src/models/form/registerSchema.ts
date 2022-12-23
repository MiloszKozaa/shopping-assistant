import * as yup from 'yup';

export const registerSchema = yup.object({
  username: yup.string().required('Username is a required field'),
  email: yup
    .string()
    .required('Email is a required field')
    .email('Email is not valid'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is a required field'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password must be match')
    .required('Confirm password is a required field'),
});
