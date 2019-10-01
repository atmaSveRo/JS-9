const commandChangePhoto = () => {
 
    const commandPhoto = document.querySelector('.command');

    const changePhoto = (target) => {

         let defaultSrc = target.src;
         target.src = target.dataset.img;
         target.dataset.img = defaultSrc;
    };

    commandPhoto.addEventListener('mouseover', (e) => {
         let target = e.target;
               target = target.closest('.command__photo');
               if (target) {
                    changePhoto(target);
               }

         
    });

    commandPhoto.addEventListener('mouseout', (e) => {
         let target = e.target;
               target = target.closest('.command__photo');
               if (target) {
                    changePhoto(target);
               }

         
    });

};

export default commandChangePhoto;
