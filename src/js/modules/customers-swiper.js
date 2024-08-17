import Swiper from 'swiper/bundle';

function CustomersSwiper() {
  const swiper = new Swiper('.customers-swiper', {
    effect: 'coverflow',
    grabCursor: true,
    slidesPerView: 'auto',
    initialSlide: 2,
    preventClicks: true,
    loop: true,
    autoplay: true,
    speed: 500,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 500,
      depth: 1000,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: '.customers__swiper-buttons .next__btn',
      prevEl: '.customers__swiper-buttons .prev__btn',
    },
  });
}

export default CustomersSwiper;
