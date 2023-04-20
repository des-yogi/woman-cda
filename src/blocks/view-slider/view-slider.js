(function(){
  const swiper = new Swiper('.view-slider__container', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})();
