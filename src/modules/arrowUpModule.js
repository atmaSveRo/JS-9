const arrowUpModule = () => {

window.onscroll = function() {
  const scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 741) {
      document.getElementById('totop').style.display = 'block';
  } else {
      document.getElementById('totop').style.display = 'none';
  }
}


};

export default arrowUpModule;