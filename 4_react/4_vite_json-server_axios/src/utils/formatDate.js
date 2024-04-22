// tarihi formatlayan bir fonksiyon
const formatDate = (date) => {
  const dateObj = new Date(date);

  return dateObj.toLocaleDateString('tr-TR', {
    month: 'long',
    day: 'numeric',
  });
};

export default formatDate;
