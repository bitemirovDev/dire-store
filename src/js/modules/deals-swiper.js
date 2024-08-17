import Swiper from 'swiper/bundle';
// import 'swiper/css';

function DealsSwiper() {
  const swiper = new Swiper('.deals-swiper', {
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
      nextEl: '.deals__swiper-buttons .next__btn',
      prevEl: '.deals__swiper-buttons .prev__btn',
    },
  });
}

export default DealsSwiper;
