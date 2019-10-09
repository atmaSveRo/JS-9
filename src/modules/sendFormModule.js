const sendFormModule = (item, idForm) => {

    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        formIdElement = document.getElementById(idForm),
        successForm = document.getElementById('thanks'),
        successMessage = 'Спасибо, мы скоро с Вами свяжемся"';

    const form = document.getElementById(item);

    const statusMessage = document.createElement('div')
        statusMessage.style.cssText = 'font-size: 10rem';
        statusMessage.style.cssText = 'color: white';

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        formIdElement.style.display = 'none'
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
                    formIdElement.style.display = 'none'    
                    statusMessage.textContent = successMessage
                    successForm.style.display = 'block'
                })
                .catch((error) => {
                    formIdElement.style.display = 'none'
                     statusMessage.textContent = errorMessage
                     
                console.log('error: ', error);
                });


       
       formData.forEach((value, key) => {
            body[key] = value;
       });

       form.querySelectorAll('input').forEach((input1) => {
            input1.value = '';
       });

   });



};

export default sendFormModule;