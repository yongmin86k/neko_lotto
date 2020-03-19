export const formatThousandNumber = (number: number) => {
  const regExp = /\B(?=(\d{3})+(?!\d))/g;
  const newValue = number.toString().replace(regExp, ",");

  return newValue;
};
