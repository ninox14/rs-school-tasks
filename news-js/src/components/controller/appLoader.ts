import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: '0981b8805afb4385955ecab0edae2ac4', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
