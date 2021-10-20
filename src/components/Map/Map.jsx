import { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MapboxLanguage from '@mapbox/mapbox-gl-language';
import mapboxgl from 'mapbox-gl';
import './Map.scss';

mapboxgl.accessToken = process.env.REACT_APP_MAP_API_KEY;

const Map = () => {
  const currentLng = useSelector((state) => state.weather.lon);
  const currentLat = useSelector((state) => state.weather.lat);
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState('');
  const [lat, setLat] = useState('');
  const currentLanguage = localStorage.getItem('language') || 'en';
  const mapLanguage = new MapboxLanguage({ defaultLanguage: currentLanguage });

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 10,
    });

    map.current.addControl(mapLanguage);

    // eslint-disable-next-line no-unused-vars
    const marker = new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(map.current);
  }, [lng, lat, currentLanguage, mapLanguage]);

  useEffect(() => {
    setLng(currentLng);
    setLat(currentLat);
  }, [currentLng, currentLat]);

  return (
    <>
      <div ref={mapContainer} className='map-container' />
    </>
  );
};

export default Map;
