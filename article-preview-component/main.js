const btn = document.querySelector('.actions__share')
const sharePanel = document.querySelector('.share')

btn.addEventListener('click', () => {
  btn.classList.toggle('active')
  sharePanel.classList.toggle('active')
})
