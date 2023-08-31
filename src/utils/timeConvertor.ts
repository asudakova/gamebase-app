export const timeConvertor = (defaultFormat: string) => {
  if (defaultFormat !== undefined) {
    const [year, month, day] = defaultFormat.split('-');
    return `${day}.${month}.${year}`;
  } else return '-'
};
