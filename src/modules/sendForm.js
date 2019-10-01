const sendForm = (item) => {
    const errorMessage = 'Что-то пошло не так...',
         loadMessage = 'Загрузка...',
         successMessage = 'Спасибо, мы скоро с Вами свяжемся"';

    const form = document.getElementById(item);
   
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem';
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

         // for (let value of formData.entries()) {
         //      body[value[0]] = value[1]
              
         // }

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
                 })
                 .catch((error) => {
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

export default sendForm;