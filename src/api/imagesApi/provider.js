import converter from './converter';

class ImagesApi {
  constructor({ baseUrl, token }) {
    this.baseUrl = baseUrl;
    this.token = token;
  }

  getFullUrlWithQueries() {
    return `${this.baseUrl}/photos/random?orientation=landscape&query=nature&client_id=${this.token}`;
  }

  getImage() {
    const fullUrl = this.getFullUrlWithQueries();

    return fetch(fullUrl)
      .then((res) => res.json())
      .then((responseData) => converter(responseData));
  }
}

export default new ImagesApi({
  baseUrl: 'https://api.unsplash.com',
  token: process.env.REACT_APP_IMAGES_API_KEY,
});
