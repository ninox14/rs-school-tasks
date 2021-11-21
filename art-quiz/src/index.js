import 'normalize.css'
import './styles/style.scss';
import '@yaireo/ui-range';

import { Home } from './pages/Home';
import { Categories } from './pages/Categories';
import { Settings } from './pages/Settings';
import { Question } from './pages/Question';
import { Error404 } from './pages/Error404';
import { Score } from './pages/Score';


import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Utils } from './utils/Utils';
import { AudioPlayer } from './utils/audio'

const header = null || document.getElementById('header_container');
const content = null || document.getElementById('page_container');
const footer = null || document.getElementById('footer_container');


const homeInstance = new Home(content);
const settingsSettings = new Settings(content);
const categoriesInstance = new Categories(content);
const error404Instance = new Error404(content);
const questionInstance = new Question(content);
const scoreInstance = new Score(content);

const headerInstance = new Header(header);
const footerInstance = new Footer(footer);

const routes = {
  '/': homeInstance,
  '/settings': settingsSettings,
  '/category/:id': categoriesInstance,
  '/category/:id/question': questionInstance,
  '/score/:id/question': scoreInstance,
};

let isFirst = true;


const router = async () => {
  if (!isFirst) {
    content.classList.add('hide');
  }
  await headerInstance.render();
  await headerInstance.after_render();

  await footerInstance.render();
  await footerInstance.after_render();
  const request = Utils.parseRequestURL();

  const parsedURL = (request.resource ? `/${request.resource}` : '/') + (request.category ? '/:id' : '') + (request.categoryIndex ?
    `/question` : '');


  const page = routes[parsedURL] ? routes[parsedURL] : error404Instance;

  if (!isFirst) {
    await Utils.sleep(1000);
    await page.render();
    content.classList.remove('hide');
  } else {
    await page.render();
    isFirst = false;
  }

  await page.after_render();
};

content.onanimationend = function () {
  content.classList.remove('show');
};
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
