window.addEventListener('DOMContentLoaded', function(){
    'use strict '

    // Timer
    function countTimer(deadline) {
         // Объявляем переменные часов, минут, секунд
        let timerHours = document.querySelector('#timer-hours'),
             timerMinutes = document.querySelector('#timer-minutes'),
             timerSeconds = document.querySelector('#timer-seconds');

          // задаём значения часам, минутам, секундам
        function getTimeRemaining() {
             let dateStop = new Date(deadline).getTime(), // дата, от которой вычитаем в мс
                dateNow = new Date().getTime();          // текущая дата в мс
                timeRemaining = (dateStop - dateNow) / 1000, // разница в секундах
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60 ),
                hours = Math.floor(timeRemaining / 3600);
                return {timeRemaining, hours, minutes, seconds};      
             }
          // останавливаем таймер при достижении нулевого значения
        function updateClock() {
             
            let timer = getTimeRemaining(); 
          
            (timer.hours >= 10) ? timerHours.textContent = timer.hours : timerHours.textContent = '0' + timer.hours; // добавляем 0 значениям меньше 10
            ( timer.minutes >= 10) ? timerMinutes.textContent = timer.minutes : timerMinutes.textContent = '0' + timer.minutes; // добавляем 0 значениям меньше 10
            (timer.seconds >= 10) ? timerSeconds.textContent = timer.seconds : timerSeconds.textContent = '0' + timer.seconds; // добавляем 0 значениям меньше 10
             
            // высчитываем, достиг ли таймер нулевого значения
             if(timer.timeRemaining <= 0) {
                 clearInterval(interval); // останавливаем таймер
                 timerHours.textContent = '00'; // приравниваем значение к нулю
                 timerMinutes.textContent ='00'; // приравниваем значение к нулю
                 timerSeconds.textContent = '00'; // приравниваем значение к нулю
                 timerHours.style.color = 'red'; // раскрашиваем в красный
                 timerMinutes.style.color ='red' // раскрашиваем в красный
                 timerSeconds.style.color = 'red'; // раскрашиваем в красный
            }

        }

        // объявляем переменную запуска таймера каждуб секунду
        let interval = setInterval(updateClock, 1000);
  };

     // устаналиваем дату отсчёта
     countTimer('18 september 2019');

});