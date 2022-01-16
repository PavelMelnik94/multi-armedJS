import $ from '../core';

$.prototype.slider = function() {
    const slides = document.querySelectorAll('.slide');
console.log(slides)

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

$('.slide').slider();