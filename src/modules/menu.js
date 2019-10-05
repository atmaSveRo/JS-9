const menu = () => {

    // const clubSelect = document.querySelector('.club-select'),
    const clubList = document.querySelector('.clubs-list'),
            listMenu = clubList.querySelector('ul'),
            clubListBtn = clubList.querySelector('p');
            // body = document.querySelector('body');
            
        clubListBtn.addEventListener('click', () => {
            if (!listMenu.style.display || listMenu.style.display === 'none') {
                listMenu.style.display = 'inline';
            } else {
                listMenu.style.display = 'none';
            }
        });

};

export default menu;