import Swiper from 'swiper/bundle';
import 'swiper/css';

function swiper() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    autoplay: true,
    speed: 500,
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: '.deals__swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.next__btn',
      prevEl: '.prev__btn',
    },
  });
}

export default swiper;
