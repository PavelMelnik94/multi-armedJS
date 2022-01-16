import $ from '../core';

$.prototype.slider = function() {
    const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
	slide.addEventListener('click', () => {
  clear();
  slide.classList.add('active');
  })
}

function clear() {
slides.forEach((s) => {
  s.classList.remove('active')
  })
}


};

$('.slider-wrapper').slider();