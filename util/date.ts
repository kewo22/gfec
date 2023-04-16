export const toDateString = () => {
  const today = new Date();
  // 2023-02-09
  const month =
    today.getMonth().toString().length === 1
      ? `0${today.getMonth()}`
      : today.getMonth();
  return `${today.getFullYear()}-${month}-${today.getDate()}`;
};
