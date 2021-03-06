import {
  FETCH_CURRENT_DAY_WEATHER,
  FETCH_OTHER_DAYS_WEATHER,
  SHOW_ERROR,
  FINISH_LOADING,
  CLEAR_ERROR,
} from '../actions/weatherActions';

const initialState = {
  isLoaded: false,
  error: null,
  cityName: '',
  lat: '',
  lon: '',
  currentDayWeather: [],
  otherDaysWeather: [],
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_DAY_WEATHER:
      return {
        ...state,
        cityName: action.payload.cityName,
        lat: action.payload.lat,
        lon: action.payload.lon,
        currentDayWeather: action.payload.currentDayWeatherData,
      };
    case FETCH_OTHER_DAYS_WEATHER:
      return {
        ...state,
        otherDaysWeather: action.payload,
      };
    case SHOW_ERROR:
      return { ...state, error: action.payload };
    case FINISH_LOADING:
      return { ...state, isLoaded: true };
    case CLEAR_ERROR:
      return { ...state, error: null };

    default:
      return state;
  }
};
