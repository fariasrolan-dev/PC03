const form = document.querySelector('#formulario');
const aviso = document.querySelector('#aviso');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
  aviso.textContent = 'Formulario de prueba completado.';
});
form.addEventListener('reset', () => aviso.textContent = '');