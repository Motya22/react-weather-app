import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import i18n from '../../i18n';
import { fetchFullWeather } from '../../actions/weatherActions';
import './LanguageSelector.scss';

const LanguageSelector = ({ className }) => {
  const latitude = useSelector((state) => state.weather.lat);
  const longitude = useSelector((state) => state.weather.lon);
  const dispatch = useDispatch();

  const language = localStorage.getItem('language') || 'en';

  const classes = clsx(['select', className]);

  const handleChange = (e) => {
    localStorage.setItem('language', e.target.value);
    i18n.changeLanguage(e.target.value);
    dispatch(fetchFullWeather({ latitude, longitude }));
  };

  return (
    <div className={classes}>
      <select onChange={handleChange} defaultValue={language}>
        <option value='ru'>RU</option>
        <option value='en'>EN</option>
      </select>
    </div>
  );
};

LanguageSelector.propTypes = { className: PropTypes.string };

LanguageSelector.defaultProps = { className: '' };

export default LanguageSelector;
