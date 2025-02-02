import './index.css';

import { swiperProjects } from './utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  swiperProjects();
});
