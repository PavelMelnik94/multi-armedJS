import $ from '../core';

$.prototype.carousel = function(settings = {} ) {

    const setup = {
        isAutoplay: settings.autoplay || false,
        speed: settings.speed || null,
        isHoverPause: settings.hoverPause || false,
        isCircleDots: settings.circleDots || false,
    }

       

    for (let i = 0 ;i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
        const slides = this[i].querySelectorAll('.carousel-item');
        const slidesField = this[i].querySelector('.carousel-slides');
        const dots = this[i].querySelectorAll('.carousel-indicators li');
        const prev = this[i].querySelector('.carousel-prev');
        const next = this[i].querySelector('.carousel-next');

        slidesField.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            slide.style.width = width;
        });

        let offset = 0;
        let slideIndex = 0;

        const autoPlay = (params = setup) => {
            if (!params.isAutoplay) {
                return null;
            } else if (!params.speed) {
                throw new Error('Не указана скорость автопрокрутки');
            } 

            
            if (params.isAutoplay) {
                const interval = setInterval(() => {
                    if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
                        offset = 0;
                    } else {
                        offset += +width.replace(/\D/g, '');
                    }
        
                    slidesField.style.transform = `translateX(-${offset}px)`;
        
                    if (slideIndex == slides.length - 1) {
                        slideIndex = 0;
                    } else {
                        slideIndex++;
                    }
    
                    dots.forEach((dot, index) => {
                        dot.classList.remove('active');
    
                        if (index === slideIndex) {
                            dot.classList.add('active');
                        }
                    })
    
                    slideIndex++;
                    //установка скорости из настроек
                }, params.speed);


                

                //stop autoplay on hover
                if (params.isHoverPause) {
                    this[i].addEventListener('mouseenter', () => {
                        console.log('stop autoplay');
                        clearInterval(interval);
                    })
    
                    this[i].addEventListener('mouseleave', () => {
                        console.log('start autoplay');
                        autoPlay(params);
                    })
                }
            }
        }

        autoPlay();
        
        


        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();
            if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == slides.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            if (offset == 0) {
                offset = +width.replace(/\D/g, '') * (slides.length - 1);
            } else {
                offset -= +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        const sliderId = this[i].getAttribute('id');
        $(`#${sliderId} .carousel-indicators li`).click(e => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * slideTo;

            slidesField.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        }); 
    }
};

$('.carousel').carousel();