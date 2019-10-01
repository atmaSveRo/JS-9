function countTimer(deadline) {
    let timerHours = document.querySelector('#timer-hours'),
         timerMinutes = document.querySelector('#timer-minutes'),
         timerSeconds = document.querySelector('#timer-seconds'),
         interval;

    function getTimeRemaining() {
         let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
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

 export default countTimer;