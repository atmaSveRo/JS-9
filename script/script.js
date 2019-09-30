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
   
      countTimer('01 october 2019');
 
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
 
      //slider
 
      const slider = () => {
           const slide = document.querySelectorAll('.portfolio-item'),
                btn = document.querySelectorAll('.portfolio-btn'),
                slider = document.querySelector('.portfolio-content'),
                ul = document.querySelector('.portfolio-dots');
 
           const addDots = () => {
 
                for (i = 0; i < slide.length; i++) {
                     const dot = document.createElement('li');
                     dot.className = 'dot';
                     if (i === 0) {
                          dot.classList.add('dot-active');
                     }
                     ul.appendChild(dot);
                }
           };
           addDots();
 
           let currentSlide = 0,
                interval,
                dot = document.querySelectorAll('.dot');
 
           const prevSlide = (elem, index, strClass) => {
                elem[index].classList.remove(strClass);
           };
 
           const nextSlide = (elem, index, strClass) => {
                elem[index].classList.add(strClass);
           };
 
           const autoPlaySlide = () => {
 
                prevSlide(slide, currentSlide, 'portfolio-item-active');
                prevSlide(dot, currentSlide, 'dot-active');
                currentSlide++;
                if (currentSlide >= slide.length) {
                     currentSlide = 0;
                }
                nextSlide(slide, currentSlide, 'portfolio-item-active');
                nextSlide(dot, currentSlide, 'dot-active');
 
           };
 
           const startSlide = (time = 3000) => {
                interval = setInterval(autoPlaySlide, time);
           };
 
           const stopSlide = () => {
                clearInterval(interval);
           };
 
           slider.addEventListener('click', (event) => {
                event.preventDefault();
 
                let target = event.target;
 
                if (!target.matches('.portfolio-btn, .dot')) {
                     return;
                }
 
                prevSlide(slide, currentSlide, 'portfolio-item-active');
                prevSlide(dot, currentSlide, 'dot-active');
 
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
                nextSlide(slide, currentSlide, 'portfolio-item-active');
                nextSlide(dot, currentSlide, 'dot-active');
 
           });
 
           slider.addEventListener('mouseover', (event) => {
                if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                     stopSlide();
                }
           });
 
           slider.addEventListener('mouseout', (event) => {
                if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                     startSlide();
                }
           });
 
           startSlide(1500);
 
      };
 
      slider();
 
      //our command
 
      const commandChangePhoto = () => {
 
      const commandPhoto = document.querySelector('.command');
 
      changePhoto = (target) => {
 
           let defaultSrc = target.src;
           target.src = target.dataset.img;
           target.dataset.img = defaultSrc;
      };
 
      commandPhoto.addEventListener('mouseover', (e) => {
           target = e.target;
           target = target.closest('.command__photo');
           if (target) {
                changePhoto(target);
           }
 
           
      });
 
      commandPhoto.addEventListener('mouseout', (e) => {
           target = e.target;
           target = target.closest('.command__photo');
           if (target) {
                changePhoto(target);
           }
 
           
      });
 
      };
 
      commandChangePhoto();
 
      //calc
 
      const calcError = () => {
 
           const calcBlock = document.querySelector('.calc-block'),
                input = calcBlock.querySelectorAll('input');
 
           input.forEach((item) => {
                item.addEventListener('input', () => {
                     item.value = item.value.replace(/\D/g, '');
                });
                 
           });
 
      };
 
      calcError();
 
      //калькулятор
 
      const calc = (price = 100) => {
 
           const calcBlock = document.querySelector('.calc-block'),
                calcType = document.querySelector('.calc-type'),
                calcSquare = document.querySelector('.calc-square'),
                calcDay = document.querySelector('.calc-day'),
                calcCount = document.querySelector('.calc-count'),
                totalValue = document.getElementById('total');
 
           const countSum = () => {
                let total = 0,
                     countValue = 1,
                     dayValue = 1;
                const typeValue = calcType.options[calcType.selectedIndex].value,
                     squareValue = +calcSquare.value;
 
                if (calcCount.value > 1) {
                     countValue += (calcCount.value -1) / 10;
                }
 
 
                if (calcDay.value && calcDay.value < 5) {
                     dayValue *= 2
                } else if (calcDay.value && calcDay.value < 10) {
                     dayValue *= 1.5
                }
                
 
                if (typeValue && squareValue) {
                     total = price * typeValue * squareValue * countValue * dayValue;
                }
 
                totalValue.textContent = total;
 
           const animateValue = (id, speed) => {
                
                let current = 0,
                     increment = speed,
                     total = id,
                     timer = setInterval(() => {
                          current += increment;
                     
                          totalValue.textContent = current;
                          if (current >= total) {
                               clearInterval(timer);
                          totalValue.textContent = total;
                          }
                     }, 40);
 
           };
      
           animateValue(total, 100)
 
           };     
 
         
 
           calcBlock.addEventListener('change', (event) => {
                const target = event.target;
                // if (target.matches('.calc-type') || target.matches('.calc-square') ||target.matches('.calc-day') ||target.matches('.calc-count')) {
                // }
 
                // if (target === calcType || target === calcSquare || target === calcDay || target === calcCount) {
                //      console.log(1);
                // }
 
                if (target.matches('select') || target.matches('input')) {
                     countSum();
                     
                }
           });
 
 
      };
 
      calc(100);
 
      //send-ajax-form
 
      const sendForm = (item) => {
           const errorMessage = 'Что-то пошло не так...',
                loadMessage = 'Загрузка...',
                successMessage = 'Спасибо, мы скоро с Вами свяжемся"';
 
           const form = document.getElementById(item);
          
           const statusMessage = document.createElement('div');
           statusMessage.style.cssText = 'font-size: 2rem';
           statusMessage.style.cssText = 'color: white';
           
           form.addEventListener('submit', (event) => {
                event.preventDefault();
                form.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
                const formData = new FormData(form);
 
                let body = {};
 
                // for (let value of formData.entries()) {
                //      body[value[0]] = value[1]
                     
                // }
 
                formData.forEach((value, key) => {
                     body[key] = value;
                });
                postData(body,
                     () => {
                     statusMessage.textContent = successMessage;
                     },
                     (error) => {
                     statusMessage.textContent = errorMessage;
                     console.log(error);
                });
 
                form.querySelectorAll('input').forEach((input1) => {
                     input1.value = '';
                });
 
           });
 
           const postData = (body, outputData, errorData) => {
                const request = new XMLHttpRequest();
                request.addEventListener('readystatechange', () => {
                    
                     if (request.readyState !== 4) {
                          return;
                     }
                     if (request.status === 200) {
                          outputData();
                     } else {
                          errorData(request.status);
                     }
                });
 
                request.open ('POST', './server.php');
                request.setRequestHeader('Content-Type', 'application/json');           
 
                request.send(JSON.stringify(body));
 
           }
 
      };
 
      sendForm('form1');
      sendForm('form2');
      sendForm('form3');
 
      //запрет ввода букв в форме
 
      const formNumError = () => {
 
           const formPhone = document.querySelectorAll('.form-phone');
 
           formPhone.forEach((item) => {
                item.addEventListener('input', () => {
                     item.value = item.value.replace(/[^0-9\+]/g, '');
                });
                 
           });
 
      };
      formNumError();
 
      //ввод кириллицы
 
      const formRuError = () => {
 
           const formRu = document.querySelectorAll('.form-name, #form2-name, .mess');
 
           formRu.forEach((item) => {
                item.addEventListener('input', () => {
                     item.value = item.value.replace(/[^а-яА-ЯёЁ]/g, '');
                });
                 
           });
 
      };
      formRuError();
 });