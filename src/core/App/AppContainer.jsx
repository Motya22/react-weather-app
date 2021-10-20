import { connect } from 'react-redux';
import { fetchFullWeather } from '../../actions/weatherActions';
import App from './App';

const mapStateToProps = (state) => ({
  isLoaded: state.weather.isLoaded,
  currentDayWeather: state.weather.currentDayWeather,
  otherDaysWeather: state.weather.otherDaysWeather,
  latitude: state.weather.lat,
  longitude: state.weather.lon,
});

const mapDispatchToProps = { fetchFullWeather };

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
