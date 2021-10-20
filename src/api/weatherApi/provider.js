import Converter from './converter';

class WeatherApi {
  constructor({ baseUrl, token }) {
    this.baseUrl = baseUrl;
    this.token = token;
  }

  getFullUrlWithQueries({
    daily,
    latitude = '',
    longitude = '',
    cityName = '',
  }) {
    const language = localStorage.getItem('language') || 'en';

    if (daily) {
      return `${this.baseUrl}/daily?lat=${latitude}&lon=${longitude}&city=${cityName}&days=4&lang=${language}&key=${this.token}`;
    }

    return `${this.baseUrl}/hourly?lat=${latitude}&lon=${longitude}&city=${cityName}&lang=${language}&key=${this.token}&hours=24`;
  }

  getCurrentDayWeather(queries) {
    const fullUrl = this.getFullUrlWithQueries({ ...queries });

    return fetch(fullUrl)
      .then((res) => res.json())
      .then((responseData) => Converter.getCurrentDayWeather(responseData));
  }

  getOtherDaysWeather(queries) {
    const fullUrl = this.getFullUrlWithQueries({ daily: true, ...queries });

    return fetch(fullUrl)
      .then((res) => res.json())
      .then((responseData) => Converter.getOtherDaysWeather(responseData));
  }

  getFullWeather(queries) {
    return Promise.allSettled([
      this.getCurrentDayWeather(queries),
      this.getOtherDaysWeather(queries),
    ]);
  }
}

export default new WeatherApi({
  baseUrl: 'https://api.weatherbit.io/v2.0/forecast',
  token: process.env.REACT_APP_WEATHER_API_KEY,
});
