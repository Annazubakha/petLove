import * as yup from 'yup';

export const updateUserInfoSchema = yup.object().shape({
  name: yup.string(),
  email: yup
    .string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Email is invalid.'
    ),
  phone: yup
    .string()
    .nullable()
    .notRequired()
    .test(
      'is-valid-phone',
      'Phone format is incorrect. +380962467890',
      (value) => !value || /^\+38\d{10}$/.test(value)
    ),

  avatar: yup
    .string()
    .nullable()
    .notRequired()
    .test(
      'is-valid-avatar',
      'Invalid format.',
      (value) =>
        !value || /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/.test(value)
    ),
});
