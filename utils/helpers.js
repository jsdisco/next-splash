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
