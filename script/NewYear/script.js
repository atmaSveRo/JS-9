window.addEventListener('DOMContentLoaded', function(){
    'use strict '

    let date =  new Date('18 september 2019 21:00:00');
    let date1 =Math.floor((Date.parse('31 december 2019') - Date.now())/1000/3600/24),
        time = date.toLocaleTimeString('en'),
        dayWeek = date.getDay('ru'),
        arr = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    let table = function() {
            if (date.getHours() >= 0 && date.getHours() <= 5) {
                document.write('Доброй ночи!' + '<br \/>' + 'Сегодня: ' + arr[dayWeek] + '<br \/>' + 'Текущее время: ' + time  + '<br \/>' +  'До Нового Года осталось: ' + date1 + ' дней')

            } else if (date.getHours() > 5 && date.getHours() < 12) {
                document.write('Доброе утро!'  + '<br \/>' +  'Сегодня: ' + arr[dayWeek]  + '<br \/>' +  'Текущее время: ' + time  + '<br \/>' +  'До Нового Года осталось: ' + date1 + ' дней')

            } else if (date.getHours() >= 12 && date.getHours() <= 17) {
                document.write('Добрый день!'  + '<br \/>' +  'Сегодня: ' + arr[dayWeek]  + '<br \/>' +  'Текущее время: ' + time  + '<br \/>' +  'До Нового Года осталось: ' + date1 + ' дней')

            } else if (date.getHours() > 17 && date.getHours() < 0 ) {
                document.write('Добрый вечер!'  + '<br \/>' +  'Сегодня: ' + arr[dayWeek]  + '<br \/>' +  'Текущее время: ' + time  + '<br \/>' +  'До Нового Года осталось: ' + date1 + ' дней')
            }
     }
            table();

console.log('dayWeek: ', arr[dayWeek]);
console.log('time: ', time);
console.log('date: ', date1);

});