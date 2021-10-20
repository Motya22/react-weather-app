const IconCodeToTypeMap = {
  t01d: 'thunderstormRain',
  t01n: 'thunderstormRain',
  t02d: 'thunderstormRain',
  t02n: 'thunderstormRain',
  t03d: 'thunderstormRain',
  t03n: 'thunderstormRain',
  t04d: 'thunderstormDrizzle',
  t04n: 'thunderstormDrizzle',
  t05d: 'thunderstormDrizzle',
  t05n: 'thunderstormDrizzle',
  d01d: 'flurriesDay',
  d01n: 'flurriesNight',
  d02d: 'flurriesDay',
  d02n: 'flurriesNight',
  d03d: 'flurriesDay',
  d03n: 'flurriesNight',
  r01d: 'rain',
  r01n: 'rain',
  r02d: 'rain',
  r02n: 'rain',
  r03d: 'rain',
  r03n: 'rain',
  r04d: 'rain',
  r04n: 'rain',
  r05d: 'showerRainDay',
  r05n: 'showerRainNight',
  r06d: 'rain',
  r06n: 'rain',
  f01d: 'rain',
  f01n: 'rain',
  s01d: 'lightSnow',
  s01n: 'lightSnow',
  s02d: 'snowDay',
  s02n: 'snowNight',
  s03d: 'snowDay',
  s03n: 'snowNight',
  s04d: 'lightSnow',
  s04n: 'lightSnow',
  s05d: 'sleetDay',
  s05n: 'sleetNight',
  s06d: 'flurriesDay',
  s06n: 'flurriesNight',
  a01d: 'fogDay',
  a01n: 'fogNight',
  a02d: 'fogDay',
  a02n: 'fogNight',
  a03d: 'fogDay',
  a03n: 'fogNight',
  a04d: 'fogDay',
  a04n: 'fogNight',
  a05d: 'fogDay',
  a05n: 'fogNight',
  a06d: 'fogDay',
  a06n: 'fogNight',
  c01d: 'clearSkyDay',
  c01n: 'clearSkyNight',
  c02d: 'scatteredCloudsDay',
  c02n: 'scatteredCloudsNight',
  c03d: 'brokenCloudsDay',
  c03n: 'brokenCloudsNight',
  c04d: 'cloudyDay',
  c04n: 'cloudyNight',
  u00d: 'unknownPrecipitation',
  u00n: 'unknownPrecipitation',
};

export class OtherDaysWeatherItem {
  constructor({ iconCode, temperature, stringDate }) {
    this.iconType = IconCodeToTypeMap[iconCode];
    this.temperature = Math.round(temperature);
    this.stringDate = stringDate;
  }

  get isAdvanced() {
    // eslint-disable-next-line no-prototype-builtins
    return this.hasOwnProperty('humidity');
  }
}

export class CurrentDayWeatherItem extends OtherDaysWeatherItem {
  constructor(props) {
    super(props);
    this.humidity = props.humidity;
    this.windSpeed = Math.round(props.windSpeed);
    this.description = props.description;
    this.timestamp = props.timestamp;
    this.feelsLike = Math.round(props.feelsLike);
  }
}
