const menu = () => {

    const listMenuElement = document.querySelector('.clubs-list > ul'),
        clubListBtn = document.querySelector('.clubs-list > p'),
        listMenuState = {
            opened: false
        };

    const onBtnClick = () => {
        switchMenu(listMenuElement, listMenuState)
    }  

    clubListBtn.addEventListener('click', onBtnClick);

    const switchMenu = (listMenuElement, listMenuState) => {
        if (listMenuState.opened) {
            closeMenu(listMenuElement, listMenuState)
        } else {
            openMenu(listMenuElement, listMenuState)
        }
    };

    const openMenu = (listMenuElement, listMenuState) => {
        listMenuState.opened = true

        listMenuElement.style.display = 'block';       
    };

    const closeMenu = (listMenuElement, listMenuState) => {
        listMenuState.opened = false

        listMenuElement.style.display = 'none';
    };
};

export default menu;