const sliderBtnModule = () => {

    const dot = document.querySelectorAll('.sliderGallery-dots > li'),
        slide = document.querySelectorAll('.gallery-slider > .slide'),
        slider = document.querySelector('.gallery-slider');

    let currentSlide = 0;

    const prevSlide = () => {
        
        for(let i=0; i<dot.length; i++){
            dot[currentSlide].classList.remove('dotGallery-active');
        }
    };

    const nextSlide = () => {

        for(let i=0; i<dot.length; i++){
            dot[currentSlide].classList.add('dotGallery-active');
        }
    };

    const autoPlaySlide = () => {

        prevSlide();
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide();

    };

    const startSlide = (time = 3000) => {
        setInterval(autoPlaySlide, time);
        
    };

    slider.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;

        if (!target.matches('.dotGallery')) {
            return;
        }

        prevSlide();

        
        if (target.matches('#arrow-right')) {
            currentSlide++;
       } else if (target.matches('#arrow-left')) {
            currentSlide--;
       } else if (target.matches('.dot')) {
            dot.forEach((elem, index) => {
                 if (elem === target) {
                      currentSlide = index;
                 }
            });
       }

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = slide.length -1;
        }
        
        nextSlide();

    });


   startSlide(2000);

    
};

export default sliderBtnModule;