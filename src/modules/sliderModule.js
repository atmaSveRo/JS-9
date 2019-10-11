const sliderModule = (sliderClass, slidesCount) => {

    const slide = document.querySelectorAll(sliderClass + ' .slide'),
        leftBtn = document.querySelector(sliderClass + ' .slider-left'),
        rightBtn = document.querySelector(sliderClass + ' .slider-right');

    let currentSlide = 0;

    const setSlidesActive = () => {
        for (let i = 0; i < slidesCount; i++) {
            slide[currentSlide + i].classList.add('mainSlider-active');
        }
    };
    const setSlidesInactive = () => {
        for (let i = 0; i < slidesCount; i++) {
            slide[currentSlide + i].classList.remove('mainSlider-active');
        }
    };
    setSlidesActive();
    const swipeToRightSlide = () => {
        setSlidesInactive();
        currentSlide++;
        if (currentSlide >= (slide.length - slidesCount + 1)) {
            currentSlide = 0
        }
        setSlidesActive()
    };
    const swipeToLeftSlide = () => {
        setSlidesInactive();
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slide.length - slidesCount
        }
        setSlidesActive()
    };

    const startSlide = () => {
        setInterval(swipeToRightSlide, 2000);
        
    };
    
    leftBtn && leftBtn.addEventListener("click", () => {
        swipeToLeftSlide()
    });

    rightBtn && rightBtn.addEventListener("click", () => {
        swipeToRightSlide()
    });



    startSlide();


};

export default sliderModule;