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

export default toggleMenu;
