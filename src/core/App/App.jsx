import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useInitialAppLogic } from '../../common/Hooks/useInitialAppLogic';
import DateAndTime from '../../components/DateAndTime/DateAndTime';
import LanguageSelector from '../../components/LanguageSelector/LanguageSelector';
import Loader from '../../components/Loader/Loader';
import Location from '../../components/Location/Location';
import Map from '../../components/Map/Map';
import SearchBar from '../../components/SearchBar/SearchBar';
import TemperatureUnitsToggler from '../../components/TemperatureUnitsToggler/TemperatureUnitsToggler';
import WeatherItem from '../../components/WeatherItem/WeatherItem';
import defaultBGImage from '../../assets/icons/bg3.png';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import './App.scss';

function App({
  isLoaded,
  fetchFullWeather,
  currentDayWeather,
  otherDaysWeather,
  latitude,
  longitude,
}) {
  const { hourlyWeather, currentBGImage, refreshBGImage } = useInitialAppLogic(
    currentDayWeather,
    fetchFullWeather,
  );

  const errorMessage = useSelector((state) => state.weather.error);
  const { t } = useTranslation();

  return (
    <div
      className='wrapper'
      style={{ backgroundImage: `url(${currentBGImage || defaultBGImage})` }}
    >
      <ErrorBoundary>
        <header className='header'>
          <div className='header__container container'>
            <div className='header__controls controls'>
              <div className='controls__item'>
                <Button className='controls__button' onClick={refreshBGImage}>
                  <Icon type='refreshBg' />
                </Button>
              </div>
              <div className='controls__item'>
                <LanguageSelector className='controls__select' />
              </div>
              <div className='controls__item'>
                <TemperatureUnitsToggler />
              </div>
            </div>
            <h1 className='header__title'>{t('weather_forecast_app')}</h1>
            <SearchBar className='header__form' />
          </div>
        </header>
        {isLoaded ? (
          <main className='main'>
            <div className='main__weather-block weather-block'>
              <div className='weather-block__container container'>
                <h2 className='weather-block__title'>
                  <Location />
                </h2>
                <div className='weather-block__subtitle'>
                  <DateAndTime />
                </div>
                <div className='weather-block__content content'>
                  <div className='content__forecast forecast'>
                    <ul className='forecast__list'>
                      <WeatherItem
                        className='forecast__item'
                        weatherInfo={hourlyWeather}
                      />
                      {otherDaysWeather.map((day) => (
                        <WeatherItem
                          key={day.stringDate}
                          className='forecast__item'
                          weatherInfo={day}
                        />
                      ))}
                    </ul>
                  </div>
                  <div className='content__location location'>
                    <div className='location__map'>
                      <Map />
                    </div>
                    <ul className='location__list'>
                      <li className='location__item'>
                        {t('latitude')}: {latitude}
                      </li>
                      <li className='location__item'>
                        {t('longitude')}: {longitude}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </main>
        ) : (
          <Loader />
        )}
      </ErrorBoundary>
      {errorMessage ? (
        <div
          style={{ color: 'red', textAlign: 'center', position: 'relative' }}
        >
          <span>Error: {errorMessage}</span>
        </div>
      ) : null}
    </div>
  );
}

App.propTypes = {
  isLoaded: PropTypes.bool,
  fetchFullWeather: PropTypes.func,
  currentDayWeather: PropTypes.arrayOf(PropTypes.object),
  otherDaysWeather: PropTypes.arrayOf(PropTypes.object),
  latitude: PropTypes.string,
  longitude: PropTypes.string,
};

App.defaultProps = {
  isLoaded: false,
  fetchFullWeather: () => {},
  currentDayWeather: [{}],
  otherDaysWeather: [{}],
  latitude: '',
  longitude: '',
};

export default App;
