// DARK-MODE

const btnCambiodark = document.querySelector('#cambio-dark');
const nav = document.querySelector('nav')
const main = document.querySelector('main')
const productsList = document.querySelector('#div-product')
const btnComprar = document.querySelector('#comprar')

// shadow-lg p-3 mb-5 mt-5 bg-body rounded border border-2

btnCambiodark.addEventListener('click', () => {

  document.body.classList.toggle('bg-dark');
  btnCambiodark.classList.toggle('active');
  nav.classList.toggle('navbar-dark')
  nav.classList.toggle('bg-dark')
  main.classList.toggle('navbar-dark')
  main.classList.toggle('bg-dark')  

  
  document.body.classList.contains('bg-dark') ? localStorage.setItem('dark-mode','true') : localStorage.setItem('dark-mode','false')

})

if (localStorage.getItem('dark-mode') == 'true') {
  
  document.body.classList.add('bg-dark');
  btnCambiodark.classList.add('active');
  nav.classList.toggle('navbar-dark')
  nav.classList.toggle('bg-dark')
  main.classList.toggle('navbar-dark')
  main.classList.toggle('bg-dark')

} else {
  
  document.body.classList.remove('bg-dark');
  btnCambiodark.classList.remove('active');
  
}


