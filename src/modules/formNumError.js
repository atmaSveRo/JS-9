const formNumError = () => {
 
    const formPhone = document.querySelectorAll('.form-phone');

    formPhone.forEach((item) => {
         item.addEventListener('input', () => {
              item.value = item.value.replace(/[^0-9\+]/g, '');
         });
          
    });

};

export default  formNumError;