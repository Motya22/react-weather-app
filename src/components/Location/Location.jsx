import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import LocationApi from '../../api/locationApi/provider';

const Location = () => {
  const [locality, setLocality] = useState('');
  const [country, setCountry] = useState('');
  const latitude = useSelector((state) => state.weather.lat);
  const longitude = useSelector((state) => state.weather.lon);
  const currentLanguage = localStorage.getItem('language') || 'en';

  useEffect(() => {
    if (latitude && longitude) {
      LocationApi.getLocation({ latitude, longitude }).then((result) => {
        setLocality(result.locality);
        setCountry(result.country);
      });
    }
  }, [latitude, longitude, currentLanguage]);

  return `${locality || 'Unknown city'}, ${country}`;
};

export default Location;
