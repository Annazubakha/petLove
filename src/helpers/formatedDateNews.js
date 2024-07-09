import moment from 'moment';

export const formatedDateNews = ({ date }) => {
  const formattedDate = moment(date).format('L');
  return formattedDate;
};
