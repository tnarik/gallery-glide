const gallery_name = {{ .GalleryName | jsonify }};
const selector = `.swiper-${gallery_name}`;

import Swiper from "swiper/bundle"
(function (){
  const captionEl = document.getElementById(`caption-${gallery_name}`);
  var a = new Swiper(selector, {
    loop: true,
    // autoplay: { delay: 3000 },
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: `${selector} .swiper-button-next`,
      prevEl: `${selector} .swiper-button-prev`,
    },
    pagination: { el: `${selector} .swiper-pagination`, clickable: true },
    lazy: true,
    on: {
      init: function () {
        const currentSlide = this.slides[this.activeIndex];
        captionEl.innerText = currentSlide.getAttribute('data-caption');
      },
      slideChange: function () {
        const currentSlide = this.slides[this.activeIndex];
        captionEl.innerText = currentSlide.getAttribute('data-caption');
      },
    },
  });
})();