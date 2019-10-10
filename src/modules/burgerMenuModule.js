const burgerMenuModule = () => {
 
    const topMenu = document.querySelector('.header-main'),
            menuElement = document.getElementById('popupMenu');

    topMenu.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('burgerMenu')) {
            menuElement.style.display = 'block';
        } else if (target.classList.contains('closeBtnMenu')) {
            menuElement.style.display = 'none';
        } else if (target.tagName === 'A') {
            menuElement.style.display = 'none';
        }
    });

};

export default burgerMenuModule;