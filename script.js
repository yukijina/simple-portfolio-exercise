const navbar = document.querySelector('.navbar');

window.onscroll = function () {
  if (window.scrollY > 610) {
    console.log('here');
    navbar.classList.add('bg-body-purple');
  } else {
    navbar.classList.remove('bg-body-purple');
  }
};
