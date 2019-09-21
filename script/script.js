window.addEventListener('DOMContentLoaded', function(){
    'use strict '

    // Timer
    function countTimer(deadline) {
        let timerHours = document.querySelector('#timer-hours'),
             timerMinutes = document.querySelector('#timer-minutes'),
             timerSeconds = document.querySelector('#timer-seconds'),
             interval;

        function getTimeRemaining() {
             let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime();
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60 ),
                hours = Math.floor(timeRemaining / 3600);
                return {timeRemaining, hours, minutes, seconds};      
             }

        function updateClock() {
            let timer = getTimeRemaining();
          
            (timer.hours >= 10) ? timerHours.textContent = timer.hours : timerHours.textContent = '0' + timer.hours;
            ( timer.minutes >= 10) ? timerMinutes.textContent = timer.minutes : timerMinutes.textContent = '0' + timer.minutes;
            (timer.seconds >= 10) ? timerSeconds.textContent = timer.seconds : timerSeconds.textContent = '0' + timer.seconds;
             
            
             let interval = timer.timeRemaining;
             if (interval > 0) {
            setInterval(updateClock, 1000);
            } else if (interval <= 0) {
                 clearInterval(interval);
                 timerHours.textContent = '00';
                 timerMinutes.textContent ='00';
                 timerSeconds.textContent = '00';
                 timerHours.style.color = 'red';
                 timerMinutes.style.color ='red'
                 timerSeconds.style.color = 'red';
            }

        }

        updateClock();
  };
  
     countTimer('16 september 2019');

     // меню
     const toggleMenu = () => {

          const btnMenu = document.querySelector('.menu'),
                    menu = document.querySelector('menu'),
                    closeBtn = document.querySelector('.close-btn'),
                    menuItems = menu.querySelectorAll('ul>li'),
                    body = document.body;

          // const handlerMenu = () => {
          //      menu.classList.toggle('active-menu');
          // };

          body.addEventListener('click', (event) => {
               target = event.target;

               if (target.classList.contains('close-btn')) {
                    menu.classList.remove('active-menu');
               }

               if (target.tagName === 'A') {
                    menu.classList.remove('active-menu');
               }

               target = target.closest('menu');
               if (!target) {
                    menu.classList.remove('active-menu');
               } 

               target = event.target;
               target = target.closest('.menu');
               if (target) {
                    menu.classList.add('active-menu');
               } 
              

       
               
     });
     };

     toggleMenu();

     // popup

     const togglePopup = () => {
          const popup = document.querySelector('.popup'),
                    popupBtn = document.querySelectorAll('.popup-btn'),
                    popupContent = document.querySelector('.popup-content');
                    popupBtn.forEach((elem) => {
                         elem.addEventListener('click', () => {
                              popup.style.display = 'block';
                              if (screen.width >= 720) {
                              popupContent.style.opacity ="0.5";
                              setTimeout(function(){
                                   popupContent.style.opacity ="1";
                              }, 2000);
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

     togglePopup();


     //tabs

     const tabs = () => {
          const tabHeader = document.querySelector('.service-header'),
                    tab = tabHeader.querySelectorAll('.service-header-tab'),
                    tabContent = document.querySelectorAll('.service-tab');

          const toggleTabContent = (index) => {
               for (let i = 0; i < tabContent.length; i++) {
                    if (index === i) {
                         tab[i].classList.add('active');
                         tabContent[i].classList.remove('d-none');
                    } else {
                         tab[i].classList.remove('active');
                         tabContent[i].classList.add('d-none');
                    }
               }
          };

          tabHeader.addEventListener('click', (event) => {
               let target = event.target;
                    target = target.closest('.service-header-tab');

               if(target) {
                    tab.forEach((item, i) => {
                         if (item === target) {
                              toggleTabContent(i);
                         }
                    });
               }
          });
     };

     tabs();




});