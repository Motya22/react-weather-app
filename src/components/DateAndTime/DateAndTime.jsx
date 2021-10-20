import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const NumberToDayMap = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];
const NumberToMonthMap = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

const DateAndTime = () => {
  const [date, setDate] = useState(new Date());
  const { t } = useTranslation();

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);

    return () => clearInterval(timerId);
  });

  const currentDate = `${t(
    NumberToDayMap[date.getDay()],
  )} ${date.getDate()} ${t(NumberToMonthMap[date.getMonth()])}`;
  const clock = date.toLocaleTimeString();

  return `${currentDate} ${clock}`;
};

export default DateAndTime;
