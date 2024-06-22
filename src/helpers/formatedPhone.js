export const formatedPhone = (phone) => {
  const phoneNumber = phone?.replace(
    /(\d{3})(\d{3})(\d{3})(\d{3})/,
    '$1 $2 $3 $4'
  );
  return phoneNumber;
};
