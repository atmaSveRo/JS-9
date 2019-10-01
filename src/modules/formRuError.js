const formRuError = () => {
 
    const formRu = document.querySelectorAll('.form-name, #form2-name, .mess');

    formRu.forEach((item) => {
         item.addEventListener('input', () => {
              item.value = item.value.replace(/[^а-яА-ЯёЁ]/g, '');
         });
          
    });

};

export default formRuError;