import sliderBtnModule from "./sliderBtnModule";

const sliderWithDotsModule = (sliderClass, slidesCount) => {

    const slide = document.querySelectorAll(sliderClass + ' .slide'),
        dot = document.querySelectorAll(sliderClass + ' .dots > li'),
        leftBtn = document.querySelector(sliderClass + ' .slider-left'),
        rightBtn = document.querySelector(sliderClass + ' .slider-right');

    let currentSlide = 0;

    const setDotActive = () => {
        dot[currentSlide].classList.add('dotGallery-active');
    };

    const setDotInactive = () => {
        dot[currentSlide].classList.remove('dotGallery-active');
    };

    const setSlidesActive = () => {
        setDotActive();
        for (let i = 0; i < slidesCount; i++) {
            slide[currentSlide + i].classList.add('mainSlider-active');
        }
    };
    const setSlidesInactive = () => {
        setDotInactive();
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

    //slider button

    for(let i=0; i<dot.length; i++){
        dot[i].addEventListener("click", () => {
            setSlidesInactive();
            currentSlide = i;
            setSlidesActive();
        })
    }

};

export default sliderWithDotsModule;