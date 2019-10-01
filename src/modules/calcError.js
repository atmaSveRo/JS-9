const calcError = () => {
 
    const calcBlock = document.querySelector('.calc-block'),
         input = calcBlock.querySelectorAll('input');

    input.forEach((item) => {
         item.addEventListener('input', () => {
              item.value = item.value.replace(/\D/g, '');
         });
          
    });

};

export default  calcError;