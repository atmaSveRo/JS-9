const togglePopup = () => {
    const popup = document.querySelector('.popup'),
              popupBtn = document.querySelectorAll('.popup-btn'),
              popupContent = document.querySelector('.popup-content');
              popupBtn.forEach((elem) => {
                   elem.addEventListener('click', () => {
                        popup.style.display = 'block';
                        if (document.documentElement.clientWidth >= 720) {
                        popupContent.style.opacity ="0.5";
                        setTimeout(function(){
                             popupContent.style.opacity ="1";
                        }, 500);
                   } else {
                        popupContent.style.opacity ="1";
                        clearInterval();
                   }
                                                 
                   });
              });

    popup.addEventListener('click', (event) => {
         let target = event.target;

         if (target.classList.contains('popup-close')) {
              popup.style.display = 'none';
         } else {
              target = target.closest('.popup-content');

              if (!target) {
              popup.style.display = 'none';
              }

         }
              
    });

};

export default togglePopup;