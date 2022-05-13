import moment from 'moment';
export const dayHandler = (day) => {
  const itemDate = new Date(day);

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const today = new Date();

  if (yesterday.toDateString() === itemDate.toDateString()) {
    return 'Yesterday';
  } else if (tomorrow.toDateString() === itemDate.toDateString()) {
    return 'Tomorrow';
  } else if (today.toDateString() === itemDate.toDateString()) {
    return 'Today';
  } else {
    return moment(itemDate).format('D MMMM, YYYY');
  }
};
