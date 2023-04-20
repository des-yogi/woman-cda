(function(){
  const gallery = new Swiper('.gallery__container', {
    speed: 400,
    slidesPerView: 'auto',
    spaceBetween: 24,
    centeredSlides: true,
    centeredSlidesBounds: true,
    centerInsufficientSlides: true,
    //loop: true,
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  });
})();
