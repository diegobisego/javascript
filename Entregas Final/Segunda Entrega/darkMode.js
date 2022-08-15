// DARK-MODE

const btnCambiodark = document.querySelector('#cambio-dark');
const nav = document.querySelector('nav')

btnCambiodark.addEventListener('click', () => {
  document.body.classList.toggle('bg-dark');
  btnCambiodark.classList.toggle('active');
  nav.classList.toggle('navbar-dark')
  nav.classList.toggle('bg-dark')

  if (document.body.classList.contains('bg-dark')) {
    localStorage.setItem('dark-mode','true')
  } else {
    localStorage.setItem('dark-mode','false')
  }
})

if (localStorage.getItem('dark-mode') == 'true') {
  document.body.classList.add('bg-dark');
  btnCambiodark.classList.add('active');
  nav.classList.toggle('navbar-dark')
  nav.classList.toggle('bg-dark')
} else {
  document.body.classList.remove('bg-dark');
  btnCambiodark.classList.remove('active');
}
