import clsx from 'clsx';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Icon from '../Icon/Icon';
import './WeatherItem.scss';

const NumberToDayMap = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

const WeatherItem = ({ className, weatherInfo }) => {
  const temperatureUnitsType = useSelector(
    (state) => state.temperature.temperatureUnitsType,
  );
  const { t } = useTranslation();

  const getDay = (stringDate) => {
    const date = new Date(stringDate);

    return t(NumberToDayMap[date.getDay()]);
  };

  const celsius = weatherInfo.temperature;
  const fahrenheit = Math.round((celsius * 9) / 5 + 32);
  const classes = clsx(
    className,
    `item${weatherInfo.isAdvanced ? '' : '-daily'}`,
  );

  return weatherInfo ? (
    <li className={classes}>
      {weatherInfo.isAdvanced ? null : (
        <h3 className='item__title'>{getDay(weatherInfo.stringDate)}</h3>
      )}
      <div className='item__body'>
        <span className='item__temp'>
          {temperatureUnitsType === 'celsius' ? celsius : fahrenheit}
        </span>
        <Icon type={weatherInfo.iconType} />
        {weatherInfo.isAdvanced ? (
          <ul className='item__info'>
            <li>{weatherInfo.description}</li>
            <li>
              {t('feels_like')}: {weatherInfo.feelsLike}&deg;
            </li>
            <li>
              {t('wind')}: {weatherInfo.windSpeed} m/s
            </li>
            <li>
              {t('humidity')}: {weatherInfo.humidity}%
            </li>
          </ul>
        ) : null}
      </div>
    </li>
  ) : null;
};

WeatherItem.propTypes = {
  className: PropTypes.string,
  weatherInfo: PropTypes.shape({
    iconType: PropTypes.string,
    temperature: PropTypes.number,
    stringDate: PropTypes.string,
    humidity: PropTypes.number,
    windSpeed: PropTypes.number,
    description: PropTypes.string,
    feelsLike: PropTypes.number,
    isAdvanced: PropTypes.bool,
  }),
};

WeatherItem.defaultProps = {
  className: '',
  weatherInfo: {
    iconType: '',
    temperature: 1,
    stringDate: '',
    humidity: 1,
    windSpeed: 1,
    description: '',
    feelsLike: 1,
    isAdvanced: false,
  },
};

export default WeatherItem;
