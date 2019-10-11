const sliderBtnModule = (sliderSelector, setCurrentSlide) => {

    const dot = document.querySelectorAll(sliderSelector + ' .dots > li'),
        slide = document.querySelectorAll(sliderSelector + ' > .slide')
    if (!dot.length) {
        return
    }
    let currentSlide = 0;

    const prevSlide = () => {
        dot[currentSlide].classList.remove('dotGallery-active');
    };

    const nextSlide = () => {
        dot[currentSlide].classList.add('dotGallery-active');
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

    startSlide(2000);

    for(let i=0; i<dot.length; i++){
        dot[i].addEventListener("click", () => {
            prevSlide();
            currentSlide = i;
            setCurrentSlide(i);
            nextSlide();
        })
    }

};

export default sliderBtnModule;