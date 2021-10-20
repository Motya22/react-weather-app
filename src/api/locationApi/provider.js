import converter from './converter';

class LocationApi {
  constructor({ baseUrl, token }) {
    this.baseUrl = baseUrl;
    this.token = token;
  }

  getFullUrlWithQueries({ latitude = '', longitude = '' }) {
    const language = localStorage.getItem('language') || 'en';

    return `${this.baseUrl}/geocode/v1/json?q=${latitude},${longitude}&language=${language}&key=${this.token}&pretty=1&no_annotations=1`;
  }

  getLocation(queries) {
    const fullUrl = this.getFullUrlWithQueries({ ...queries });

    return fetch(fullUrl)
      .then((res) => res.json())
      .then((responseData) => converter(responseData));
  }
}

export default new LocationApi({
  baseUrl: 'https://api.opencagedata.com',
  token: process.env.REACT_APP_LOCATION_API_KEY,
});
