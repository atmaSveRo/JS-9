const sliderModule = () => {

        const slide = document.querySelectorAll('.main-slider > .slide');
        console.log('slide: ', slide);
        
        let currentSlide = 0;
   
        const autoPlaySlide = () => {
            for (let i = 0; i < slide.length; i++) {
            slide[i].classList.remove('mainSlider-active');
    
   
        };
    }
    
        const startSlide = () => {
            setInterval(autoPlaySlide, 2000);
        };

        startSlide();

}


export default sliderModule;