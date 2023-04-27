
const listaDeTeclas = document.querySelectorAll('.tecla')

for (let tecla of listaDeTeclas) {
  tecla.addEventListener('click', () => document.querySelector(`#som_${tecla.classList[1]}`).play())

  tecla.addEventListener('keydown', (event) => event.code === 'Space' || event.code === 'Enter' ? tecla.classList.add('ativa') : null)
  tecla.addEventListener('keyup', () => tecla.classList.remove('ativa'))
}
