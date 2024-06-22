export const formatedWorkDays = (workDays) => {
  const openDay = workDays?.find((day) => day.isOpen);
  if (openDay) {
    return `${openDay.from} - ${openDay.to}`;
  } else {
    return 'Day and night';
  }
};
