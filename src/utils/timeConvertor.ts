export const timeConvertor = (defaultFormat: string) => {
  const [year, month, day] = defaultFormat.split('-');
  return `${day}.${month}.${year}`;
};
