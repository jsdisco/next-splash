export const formatDate = (str) => {
  const date = new Date(str);
  const formattedDate = date.toDateString().split(' ').slice(1).join(' ');
  const formattedTime = date.toLocaleTimeString('en');
  return `${formattedDate}, ${formattedTime}`;
};

export const previewTextColor = (bgCol) => {
  const hex = bgCol.replace('#', '');
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;

  const [max, min] = [Math.max(r, g, b), Math.min(r, g, b)];
  return max + min < 1 ? '#ffffff' : '#000000';
};
