const arrowUpModule = () => {

window.onscroll = function() {
  const scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled <= 741) {
      document.getElementById('totop').style.display = 'none';
  } else {
      document.getElementById('totop').style.display = 'block';
  }
}


};

export default arrowUpModule;