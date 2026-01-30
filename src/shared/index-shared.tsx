import dayjs from 'dayjs';
export const dayjsLocale = (date: string) => {
  return dayjs(date).locale('fr').format('DD/MM/YYYY : HH[h]mm');
};