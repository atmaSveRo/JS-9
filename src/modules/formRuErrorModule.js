const formRuErrorModule = () => {
 
    const formRu = document.querySelectorAll('.input-text1');

    formRu.forEach((item) => {
         item.addEventListener('input', () => {
              item.value = item.value.replace(/[^а-яА-ЯёЁ]/g, '');
         });
          
    });

};

export default formRuErrorModule;