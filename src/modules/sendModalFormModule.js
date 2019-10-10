const sendModalFormModule = (item, idForm) => {

    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        formIdElement = document.getElementById(idForm),
        successForm = document.getElementById('thanks'),
        successMessage = 'Спасибо, мы скоро с Вами свяжемся"',
        stateHolderElement = formIdElement && formIdElement.querySelector(`[data-state]`);

    const form = document.getElementById(item);

    const statusMessage = document.createElement('div')
        statusMessage.style.cssText = 'font-size: 10rem';
        statusMessage.style.cssText = 'color: white';

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;

        const formData = new FormData(form);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });

        const postData = (body) => {

            return fetch('./server.php', {
                 method: 'POST',
                 headers: {
                      'Content-Type': 'application/json'
                 },
                 body: JSON.stringify(body)
            });

       };

       postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200')
                    }
                    statusMessage.textContent = successMessage
                    stateHolderElement.setAttribute("data-state", "success")
                })
                .catch((error) => {
                    statusMessage.textContent = errorMessage
                    console.error(error);
                    stateHolderElement.setAttribute("data-state", "error")
                });

       
       formData.forEach((value, key) => {
            body[key] = value;
       });

       form.querySelectorAll('input:not([type="radio"])').forEach((input1) => {
        input1.value = '';
        });  

   });



};

export default sendModalFormModule;