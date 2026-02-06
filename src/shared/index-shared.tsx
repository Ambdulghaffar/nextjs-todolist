import dayjs from 'dayjs';
export const dayjsLocale = (date: string) => {
  return dayjs(date).locale('fr').format('DD/MM/YYYY : HH[h]mm');
};

export const truncateStr = (msg: string, length = 50): string => {
  if (msg.length > length) {
    return msg.slice(0, length) + '...';
  }
  return msg;
};