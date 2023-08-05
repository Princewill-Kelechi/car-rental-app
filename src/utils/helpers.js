export const shortenText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + "...";
};

export const cleanseNumber = (number) => {
  return Number(number.replace(",", ""));
};


export const formatNumber = (no) =>  no.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
