import { useEffect, useState } from 'react';
import {
  MINUTES_PER_HOUR,
  ONE_SECOND,
  SECONDS_PER_MINUTE,
} from '../consts/time';

export const useTimeForCurrentDayWeather = (startTime) => {
  const [timeForCurrentDayWeather, setTimeForCurrentDayWeather] = useState(startTime);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeForCurrentDayWeather(new Date().getHours() + 1);
    }, ONE_SECOND * SECONDS_PER_MINUTE * MINUTES_PER_HOUR);

    return () => clearInterval(timerId);
  });

  return timeForCurrentDayWeather;
};
