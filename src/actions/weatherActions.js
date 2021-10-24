import WeatherApi from '../api/weatherApi/provider';

export const FETCH_CURRENT_DAY_WEATHER = 'FETCH_CURRENT_DAY_WEATHER';
export const FETCH_OTHER_DAYS_WEATHER = 'FETCH_OTHER_DAYS_WEATHER';
export const SHOW_ERROR = 'SHOW_ERROR';
export const FINISH_LOADING = 'FINISH_LOADING';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export const fetchCurrentDayWeather = (queries) => (dispatch) => {
  WeatherApi.getCurrentDayWeather({ ...queries })
    .then((result) => dispatch({ type: FETCH_CURRENT_DAY_WEATHER, payload: result }))
    .catch((error) => dispatch(showError(error.message)));
};

export const fetchOtherDaysWeather = (queries) => (dispatch) => {
  WeatherApi.getOtherDaysWeather({ ...queries })
    .then((result) => dispatch({ type: FETCH_OTHER_DAYS_WEATHER, payload: result }))
    .catch((error) => dispatch(showError(error.message)));
};

export const fetchFullWeather = (queries) => (dispatch) => {
  WeatherApi.getFullWeather({ ...queries })
    .then((fullWeather) => fullWeather.forEach((weatherItem, index) => {
      if (weatherItem.status === 'fulfilled') {
        index === 0
          ? dispatch({
            type: FETCH_CURRENT_DAY_WEATHER,
            payload: weatherItem.value,
          })
          : dispatch({
            type: FETCH_OTHER_DAYS_WEATHER,
            payload: weatherItem.value,
          });
      } else if (weatherItem.status === 'rejected') {
        dispatch(showError(weatherItem.reason.toString()));
      }
    }))
    .finally(() => dispatch(finishLoading()));
};

export const showError = (errorMessage) => ({
  type: SHOW_ERROR,
  payload: errorMessage,
});

export const finishLoading = () => ({ type: FINISH_LOADING });

export const clearError = () => ({ type: CLEAR_ERROR });
