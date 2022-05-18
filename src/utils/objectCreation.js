export const getObjectData = (icon, data, title) => {
  let label;

  if (title === 'Assignee') {
    label = 'Assign To';
  } else if (title === 'Label') {
    label = 'Tag Title';
  } else {
    label = title;
  }

  const objectItem = {
    icon: icon,
    title: title,
    label: label,
    dataArray: data,
  };

  return objectItem;
};
