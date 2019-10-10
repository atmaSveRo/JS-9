const fixMenuModule = () => {

 window.onscroll = function() {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 187 && document.documentElement.clientWidth <= 767) {
        document.querySelector('.top-menu').classList.add('sticky');
        document.querySelector('.burgerMenu').style.top = '0';
    } else {
        document.querySelector('.top-menu').classList.remove('sticky');
    }
  }

}

export default fixMenuModule;