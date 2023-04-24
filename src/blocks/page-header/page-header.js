(function(){
  const header = document.querySelector('.page-header--sticky');

  function throttle(fn, delay) {
    let last = undefined;
    let timer = undefined;
    return function () {
      const now = +new Date();
      if (last && now < last + delay) {
        clearTimeout(timer);
        timer = setTimeout(function () {
          last = now;
          fn();
        }, delay);
      } else {
        last = now;
        fn();
      }
    };
  }

  function onScroll() {
    if (window.pageYOffset) {
      header.classList.add('is-active');
    } else {
      header.classList.remove('is-active');
    }
  }

  //if (window.matchMedia('(min-width: 768px)').matches){
  // do functionality on screens bigger than 1366px
  //}

  window.addEventListener('scroll', throttle(onScroll, 25), {passive: true});
}());

