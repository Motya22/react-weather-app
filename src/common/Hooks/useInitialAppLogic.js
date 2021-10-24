import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { usePosition } from './usePosition';
import { useTimeForCurrentDayWeather } from './useTimeForCurrentDayWeather';
import ImagesApi from '../../api/imagesApi/provider';
import { finishLoading, showError } from '../../actions/weatherActions';

export const useInitialAppLogic = (currentDayWeather, fetchFullWeather) => {
  const [hourlyWeather, setHourlyWeather] = useState(currentDayWeather[0]);
  const [currentBGImage, setCurrentBGImage] = useState(null);
  const dispatch = useDispatch();
  const { latitude, longitude, error } = usePosition();

  if (error) {
    dispatch(finishLoading());
    dispatch(showError(error));
  }

  const refreshBGImage = () => {
    ImagesApi.getImage().then((result) => setCurrentBGImage(result.url));
  };

  const timeForCurrentDayWeather = useTimeForCurrentDayWeather(
    new Date().getHours() + 1,
  );

  useEffect(() => {
    if (latitude && longitude) {
      fetchFullWeather({ latitude, longitude });
    }
  }, [latitude, longitude, fetchFullWeather]);

  useEffect(() => {
    const getHourlyWeather = (hour) => (
      currentDayWeather.find((weatherForHour) => weatherForHour.timestamp.includes(hour))
    );

    const newHourlyWeather = getHourlyWeather(timeForCurrentDayWeather);

    setHourlyWeather(newHourlyWeather);
  }, [currentDayWeather, timeForCurrentDayWeather]);

  useEffect(() => {
    refreshBGImage();
  }, []);

  return {
    hourlyWeather,
    currentBGImage,
    refreshBGImage,
  };
};
