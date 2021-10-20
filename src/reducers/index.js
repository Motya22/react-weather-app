import { combineReducers } from 'redux';
import { weatherReducer } from './weatherReducer';
import { temperatureReducer } from './temperatureReducer';

export default combineReducers({
  weather: weatherReducer,
  temperature: temperatureReducer,
});
