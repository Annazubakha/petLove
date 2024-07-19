import * as yup from 'yup';

export const addPetSchema = yup.object().shape({
  title: yup.string().required('Title is required.'),
  name: yup.string().required('Name is required.'),
  sex: yup.string().required('Gender is required.'),
  species: yup.string().required('Species is required.'),
  birthday: yup
    .string()
    // .matches(/^\d{4}-\d{2}-\d{2}$/)
    .required('Birthday is required.'),
  imgURL: yup
    .string()
    .matches(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
      'Photo format is invalid.'
    )
    .required(),
});
