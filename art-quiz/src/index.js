'use strict';
import 'normalize.css'
import './styles/style.scss';
import '@yaireo/ui-range';

import { Home } from './pages/Home';
import { Categories } from './pages/Categories';
import { Settings } from './pages/Settings';
import { Error404 } from './pages/Error404';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Utils } from './utils/Utils';


const header = null || document.getElementById('header_container');
const content = null || document.getElementById('page_container');
const footer = null || document.getElementById('footer_container');


const homeInstance = new Home(content);
const settingsSettings = new Settings(content);
const categoriesInstance = new Categories(content);
const error404Instance = new Error404(content);

const headerInstance = new Header(header);
const footerInstance = new Footer(footer);

const routes = {
  '/': homeInstance,
  '/settings': settingsSettings,
  '/category/:id': categoriesInstance,
  // '/category/:id/question': questionInstance,
};

const router = async () => {

  await headerInstance.render();
  await headerInstance.after_render();

  await footerInstance.render();
  await footerInstance.after_render();
  const request = Utils.parseRequestURL();

  const parsedURL = (request.resource ? `/${request.resource}` : '/') + (request.category ? '/:id' : '') + (request.verb ? `/${request.verb}` : '');

  const page = routes[parsedURL] ? routes[parsedURL] : error404Instance;

  await page.render();

  await page.after_render();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
