const body = document.body
const face = document.querySelector('.test')

export const glow = () => {
  body.addEventListener('mousemove', (e) => {
    const rect = face.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
  
    body.style.setProperty('--mouse-x', `${x}px`)
    body.style.setProperty('--mouse-y', `${y}px`)
  })
}
