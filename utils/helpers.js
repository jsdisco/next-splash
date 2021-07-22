export const formatDate = (str) => {
  const date = new Date(str);
  const formattedDate = date.toDateString().split(' ').slice(1).join(' ');
  const formattedTime = date.toLocaleTimeString('en');
  return `${formattedDate}, ${formattedTime}`;
};
