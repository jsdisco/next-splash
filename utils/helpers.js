export const dividePhotosIntoColumns = (arr) => {
  const columns = {
    col1: [],
    col2: [],
    col3: [],
  };

  arr.forEach((item, i) => {
    columns[`col${(i % 3) + 1}`].push(item);
  });

  return columns;
};

export const formatDate = (str) => {
  const date = new Date(str);
  const formattedDate = date.toDateString().split(' ').slice(1).join(' ');
  const formattedTime = date.toLocaleTimeString('en');
  return `${formattedDate}, ${formattedTime}`;
};
