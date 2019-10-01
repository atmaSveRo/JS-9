const commandChangePhoto = () => {
 
    const commandPhoto = document.querySelector('.command');

    changePhoto = (target) => {

         let defaultSrc = target.src;
         target.src = target.dataset.img;
         target.dataset.img = defaultSrc;
    };

    commandPhoto.addEventListener('mouseover', (e) => {
         target = e.target;
         target = target.closest('.command__photo');
         if (target) {
              changePhoto(target);
         }

         
    });

    commandPhoto.addEventListener('mouseout', (e) => {
         target = e.target;
         target = target.closest('.command__photo');
         if (target) {
              changePhoto(target);
         }

         
    });

};

export default commandChangePhoto;
