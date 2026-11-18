// Una fotografia alla volta. Swiper gestisce pulsanti e contatore.
new Swiper('.venue-swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  rewind: true,
  autoplay: false,
  navigation: {
    prevEl: '.gallery-prev',
    nextEl: '.gallery-next',
  },
  pagination: {
    el: '.gallery-count',
    type: 'fraction',
  },
  a11y: {
    prevSlideMessage: 'Fotografia precedente',
    nextSlideMessage: 'Fotografia successiva',
  },
});
