// DARK-MODE
debugger
const btnCambiodark = document.querySelector('#cambio-dark');
const nav = document.querySelector('nav')
const main = document.querySelector('main')
const productsList = document.querySelectorAll('#div-product>div')

// shadow-lg p-3 mb-5 mt-5 bg-body rounded border border-2

btnCambiodark.addEventListener('click', () => {
  document.body.classList.toggle('bg-dark');
  btnCambiodark.classList.toggle('active');
  nav.classList.toggle('navbar-dark')
  nav.classList.toggle('bg-dark')
  main.classList.toggle('navbar-dark')
  main.classList.toggle('bg-dark')

  if (document.body.classList.contains('bg-dark')) {
    localStorage.setItem('dark-mode','true')
  } else {
    localStorage.setItem('dark-mode','false')
  }
})

if (localStorage.getItem('dark-mode') == 'true') {
  debugger
  document.body.classList.add('bg-dark');
  btnCambiodark.classList.add('active');
  nav.classList.toggle('navbar-dark')
  nav.classList.toggle('bg-dark')
  main.classList.toggle('navbar-dark')
  main.classList.toggle('bg-dark')
  productsList.classList.toggle('col-md-4 produc-items shadow-lg p-3 mb-5 mt-5 bg-body rounded border border-2')
} else {
  document.body.classList.remove('bg-dark');
  btnCambiodark.classList.remove('active');
  
}
