import { format } from 'date-fns';

export const convertPetBirthday = (date) => {
  const birthday = new Date(date);
  return format(birthday, 'yyyy-MM-dd');
};

export const formattedBirthday = (date) => {
  if (date === undefined) {
    return;
  }
  const birthday = new Date(date);
  const text = format(birthday, 'dd.mm.yyyy');
  return text;
};
