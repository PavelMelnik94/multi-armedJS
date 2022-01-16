import $ from '../core';

$.prototype.slider = function() {
   console.log()
    for (let i = 0 ;i < this.length; i++) {
        const upBtn = this[i].querySelector('.up-button')
        const downBtn = this[i].querySelector('.down-button')
        const container = document.querySelector(`.${this[i].className}`)
        const sideBar = this[i].querySelector('.sidebar')
        const mainSlide = this[i].querySelector('.main-slide')
        
        const slidesCount = mainSlide.querySelectorAll('div').length
        
        let activeSlideIndex = 0;
            
sideBar.style.top = `-${(slidesCount - 1) * 100}vh`


upBtn.addEventListener('click', () => {
changeSlide('up')
})

downBtn.addEventListener('click', () => {
changeSlide('down')
})

const changeSlide= (direction) => {
  if (direction === 'up' ) {
    activeSlideIndex++
    	if (activeSlideIndex === slidesCount ) {
 	   activeSlideIndex = 0;
  	  }
  } else if (direction === 'down') {
 	 activeSlideIndex--
 		 if (activeSlideIndex < 0) {
 				 activeSlideIndex = slidesCount - 1
 		 }
  }
  
  const height = container.clientHeight
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
  sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`
}

    }



};

$('.vertical-slider__wrapper').slider();