import {
  CurrentDayWeatherItem,
  OtherDaysWeatherItem,
} from '../../common/entities/weatherEntities';

class Converter {
  getOtherDaysWeather({ data }) {
    const otherDaysWeatherData = data
      .filter((weatherItem, index) => index !== 0)
      .map(
        (weatherItem) => new OtherDaysWeatherItem({
          iconCode: weatherItem.weather.icon,
          temperature: weatherItem.temp,
          stringDate: weatherItem.datetime,
        }),
      );

    return otherDaysWeatherData;
  }

  getCurrentDayWeather({ data, city_name, lon, lat }) {
    const currentDayWeatherData = data.map(
      (weatherItem) => new CurrentDayWeatherItem({
        humidity: weatherItem.rh,
        timestamp: weatherItem.timestamp_local,
        windSpeed: weatherItem.wind_spd,
        iconCode: weatherItem.weather.icon,
        description: weatherItem.weather.description,
        feelsLike: weatherItem.app_temp,
        temperature: weatherItem.temp,
        stringDate: weatherItem.datetime,
      }),
    );

    return {
      currentDayWeatherData,
      cityName: city_name,
      lon: lon.toString(),
      lat: lat.toString(),
    };
  }
}

export default new Converter();
