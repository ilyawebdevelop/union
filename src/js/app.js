import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import "./modules/inputmask.min.js";
import { Fancybox } from "./modules/fancybox.esm.js";
import "./modules/bootstrap.bundle.min.js";
import './components.js';

flsFunctions.isWebp();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});

let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.headerNav');
const bodyEl = document.querySelector('body');
const btnClose = document.querySelector('.headerNavCloseBtn');

const toggleMenu = function () {
  menu.classList.toggle('active');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}
const menuClose = function () {
  toggleBurger();
  bodyOverflow();
  toggleMenu();
}

btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
});

btnClose?.addEventListener('click', function (e) {
  menuClose();
});

// Инициализация слайдера catalogSlider
document.querySelectorAll('.catalogSlider').forEach(n => {
  const mySwiperCatalog = new Swiper(n, {
    slidesPerView: 4,
    spaceBetween: 24,
    speed: 600,
    navigation: {
      prevEl: n?.closest('.catalogSliderW').querySelector('.navArrowPrev'),
      nextEl: n?.closest('.catalogSliderW').querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
});

// Инициализация слайдера catalogSlider
document.querySelectorAll('.catalogSliderThree').forEach(n => {
  const mySwiperCatalogThree = new Swiper(n, {
    slidesPerView: 3,
    spaceBetween: 24,
    speed: 600,
    navigation: {
      prevEl: n?.closest('.catalogSliderW').querySelector('.navArrowPrev'),
      nextEl: n?.closest('.catalogSliderW').querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
});

// Инициализация слайдера reviewsSlider
const reviewsSlider = document.querySelector('.reviewsSlider');
var mySwiperReviews = new Swiper(reviewsSlider, {
  slidesPerView: 3,
  spaceBetween: 24,
  speed: 600,
  navigation: {
    prevEl: reviewsSlider?.closest('.reviewsSliderW').querySelector('.navArrowPrev'),
    nextEl: reviewsSlider?.closest('.reviewsSliderW').querySelector('.navArrowNext'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

// Инициализация слайдера videoSlider
const videoSlider = document.querySelector('.videoSlider');
var mySwiperVideo = new Swiper(videoSlider, {
  slidesPerView: 3,
  spaceBetween: 24,
  speed: 600,
  navigation: {
    prevEl: videoSlider?.closest('.videoSliderW').querySelector('.navArrowPrev'),
    nextEl: videoSlider?.closest('.videoSliderW').querySelector('.navArrowNext'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

// Инициализация слайдера productSlider
document.querySelectorAll('.productSlider').forEach(n => {
  const mySwiperProduct = new Swiper(n, {
    slidesPerView: 1,
    spaceBetween: 13,
    speed: 600,
    freeMode: true,
    watchSlidesProgress: true,
    mousewheel: true,
    navigation: {
      prevEl: n?.querySelector('.navArrowPrev'),
      nextEl: n?.querySelector('.navArrowNext'),
    },
    thumbs: { // указываем на превью слайдер
      swiper: {
        el: document.querySelector('.productThumbSlider'),
        slidesPerView: 5,
        spaceBetween: 20,
        speed: 600,
        watchSlidesProgress: true,
        breakpoints: {
          0: {
            spaceBetween: 8,
          },
          576: {
            spaceBetween: 10,
          },
          1200: {
            spaceBetween: 16,
          },
        },
      }
    },
  });
});

let jsShowMore = document.querySelectorAll('.js-show-more');

jsShowMore.forEach(el => {
  el.addEventListener('click', () => {
    console.log('123');
    let linkText = el.textContent;
    let contentHidden = el.closest('.cardText').querySelector('.content');
    if (linkText == "Подробнее" || linkText == "Свернуть") {
      if (linkText == "Подробнее") {
        el.textContent = "Свернуть";
        contentHidden.classList.remove("content--hidden");
        contentHidden.classList.add("content--visible");
      } else {
        el.textContent = "Подробнее";
        contentHidden.classList.remove("content--visible");
        contentHidden.classList.add("content--hidden");
      }
    }
  });
});

let filterContent = document.querySelector('.filterContent');
let filterBtnCallContent = document.querySelector('.filterBtnCallContent');
let filterContentClose = document.querySelector('.filterContentClose');
let filterBtnHide = document.querySelector('.filterBtnHide');

filterBtnCallContent?.addEventListener('click', () => {
  filterContent.classList.add('active');
  bodyOverflow();
});

filterContentClose?.addEventListener('click', () => {
  filterContent.classList.remove('active');
  bodyOverflow();
});


let formSelectArrayFilter = document.querySelectorAll('.filterContent .formSelect option');
const mediaQueryMin992 = window.matchMedia('(min-width: 992px)');
if (mediaQueryMin992.matches) {
  formSelectArrayFilter.forEach(el => {
    if (el.value == 'default') {
      el.remove();
    }
  });
}

filterBtnHide?.addEventListener('click', () => {
  filterContent.classList.toggle('fields-hide-lg');
});

let paramHide = document.querySelector('.paramHide');
let paramListHideW = document.querySelector('.paramList--hide-w');

paramHide?.addEventListener('click', () => {
  paramListHideW.classList.toggle('active');
  paramHide.classList.toggle('active');
});

let clearArray = document.querySelectorAll('.clear');
clearArray.forEach(el => {
  el.addEventListener('click', () => {
    let input = el.closest('.inputW').querySelector('input');
    input.value = '';
  });
});

document.addEventListener('DOMContentLoaded', () => {
	const hero = document.querySelector('main .sect');
	const header = document.querySelector('.header');
	const mainEl = document.querySelector('.main');

	const headerFixed = () => {
		let scrollTop = window.scrollY;
		let heroCenter = hero.offsetHeight;

		if (scrollTop >= heroCenter) {
			header.classList.add('fixed')
			mainEl.style.marginTop = `${header.offsetHeight}px`;
		} else {
			header.classList.remove('fixed')
			mainEl.style.marginTop = `0px`;
		}
	};

	headerFixed();

	window.addEventListener('scroll', () => {
		headerFixed();
    console.log(header.offsetHeight);
	});
});


