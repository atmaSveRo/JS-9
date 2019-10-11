const sendFormModule = (item) => {

    const loadMessage = 'Загрузка...',
        errorForm = document.getElementById('error'),
        closeForm = document.querySelector('.popups'),
        successForm = document.getElementById('thanks');

    const form = document.getElementById(item);

    closeForm.addEventListener('click', (event) => {
        let target = event.target;
        
        if (target.classList.contains('close-form')) {
            errorForm.style.display = 'none';
            successForm.style.display = 'none';
    
        } else if (target.classList.contains('close-btn')) {
            errorForm.style.display = 'none';
            successForm.style.display = 'none';
    
        } else {
            target = target.closest('.form-content');
            if (!target) {
                errorForm.style.display = 'none';
                successForm.style.display = 'none';
            }      
        }  
    });

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

        if (!body.isAgree) {
            alert('Необходимо дать согласие на обработку персональных данных')
            return
        }

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
                    successForm.style.display = 'block'
    
                })
                .catch((error) => {
                    errorForm.style.display = 'block' 
                    console.error(error);
                    
                });


       
       formData.forEach((value, key) => {
            body[key] = value;
       });

       form.querySelectorAll('input:not([type="radio"])').forEach((input1) => {
        input1.value = '';
        });  

   });



};

export default sendFormModule;