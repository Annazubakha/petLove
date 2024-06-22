import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup.string().required('Name is required.'),
  email: yup
    .string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Email is invalid.'
    )
    .required('Email is required'),
  password: yup
    .string()
    .matches(/^\S*$/, 'Your password should not contain spaces.')
    .required('Password is required.')
    .min(7, 'Password must be at least 7 characters.'),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords don't match.")
    .required('Please confirm your password.'),
});
