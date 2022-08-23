// DARK-MODE

const btnCambiodark = document.querySelector('#cambio-dark');
const nav = document.querySelector('nav')

btnCambiodark.addEventListener('click', () => {

  document.body.classList.toggle('mode-dark-bg');
  btnCambiodark.classList.toggle('active');
  nav.classList.toggle('mode-dark-nav-bg')

  
  document.body.classList.contains('mode-dark-bg') ? localStorage.setItem('dark-mode','true') : localStorage.setItem('dark-mode','false')

})

if (localStorage.getItem('dark-mode') == 'true') {
  
  document.body.classList.add('mode-dark-bg');
  btnCambiodark.classList.add('active');
  nav.classList.toggle('mode-dark-nav-bg')

} else {
  
  document.body.classList.remove('mode-dark-bg');
  btnCambiodark.classList.remove('active');
  
}


