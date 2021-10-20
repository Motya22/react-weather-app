import { useState, useEffect } from 'react';

export const usePosition = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onSuccess = ({ coords }) => {
    setPosition({ latitude: coords.latitude, longitude: coords.longitude });
  };

  const onError = (err) => {
    setError(err.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      setError('Геолокация не поддерживается браузером');

      return;
    }

    geo.getCurrentPosition(onSuccess, onError);
  }, []);

  return { ...position, error };
};
