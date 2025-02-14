import 'swiper/css';

import Swiper from 'swiper/bundle';

export function swiperProjects() {
  const swiperContainers = document.querySelectorAll('.swiper.is-projets');

  swiperContainers.forEach((container) => {
    new Swiper(container as HTMLElement, {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      autoHeight: true,
      centeredSlides: true,
      spaceBetween: 0,
      speed: 750,
      // mousewheel: {
      //   forceToAxis: true,
      // },
      mousewheel: {
        forceToAxis: true,
        sensitivity: 0,
        // releaseOnEdges: true,
        // thresholdDelta: 50,
        // thresholdTime: 100,
      },
      pagination: {
        el: '.projets_pagination',
        clickable: true,
        bulletClass: 'projets_pagination-bullet',
        bulletActiveClass: 'projets_pagination-bullet-active',
      },
      navigation: {
        nextEl: container.querySelector('.projets_navigation-right') as HTMLElement,
        prevEl: container.querySelector('.projets_navigation-left') as HTMLElement,
      },
    });
  });
}
