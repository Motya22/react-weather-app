import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { fetchFullWeather, clearError } from '../../actions/weatherActions';
import Button from '../Button/Button';
import './SearchBar.scss';

const SearchBar = ({ className }) => {
  const [cityName, setCityName] = useState('');
  const dispatch = useDispatch();

  const classes = clsx(['form', className]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cityName.trim()) {
      dispatch(fetchFullWeather({ cityName }));
      dispatch(clearError());
      setCityName('');
    }
  };

  const { t } = useTranslation();

  return (
    <form className={classes} action='#' onSubmit={handleSubmit}>
      <input
        type='search'
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        placeholder={t('search_city')}
        maxLength='30'
      />
      <Button type='submit'>{t('search')}</Button>
    </form>
  );
};

SearchBar.propTypes = { className: PropTypes.string };

SearchBar.defaultProps = { className: '' };

export default SearchBar;
