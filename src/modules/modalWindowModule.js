const modalWindowModule = (idForm, btnIdForm) => {

const formBtnElement = document.querySelector(btnIdForm),
    formIdElement = document.getElementById(idForm),
    closeForm = document.querySelector('.popups'),
    stateHolderElement = formIdElement.querySelector(`[data-state]`);

const onBtnClick = () => {
    if (formBtnElement === document.querySelector('.fixed-gift')) {
        formBtnElement.style.display = 'none';
        switchMenu(formIdElement);
    } else {
        switchMenu(formIdElement);
    }
    
};

formBtnElement.addEventListener('click', onBtnClick);

const switchMenu = (formIdElement) => {
        openRecall(formIdElement)
};

const openRecall = (formIdElement) => {
    if (stateHolderElement != null) {
        stateHolderElement.setAttribute("data-state", "input")
    }
    formIdElement.style.display = 'block';       
};

closeForm.addEventListener('click', (event) => {
    let target = event.target;
    
    if (target.classList.contains('close-form')) {
        formIdElement.style.display = 'none';

   } else if (target.classList.contains('close-btn')) {
            formIdElement.style.display = 'none';

   } else {
        target = target.closest('.form-content');
        if (!target) {
            formIdElement.style.display = 'none';
        }      
   }  
});

};

export default modalWindowModule;