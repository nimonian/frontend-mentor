const faqs = document.querySelectorAll('.faq__question')

for (let faq of faqs) {
  faq.addEventListener('click', () => {
    Array.from(faqs)
      .filter(f => f !== faq)
      .forEach(f => hide(f))
    toggle(faq)
  })
}

function hide (el) {
  el.parentElement.classList.remove('active')
  const answer = el.nextElementSibling
  answer.style.maxHeight = null
}

function show (el) {
  el.parentElement.classList.add('active')
  const answer = el.nextElementSibling
  answer.style.maxHeight = answer.scrollHeight + 'px'
}

function toggle (el) {
  const answer = el.nextElementSibling
  if (answer.style.maxHeight) {
    hide(el)
  } else {
    show(el)
  }
}
