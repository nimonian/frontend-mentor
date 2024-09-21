import { tick } from './js/clock'
// import { glow } from './js/glow'

// remove annoying whitespace (allows readable-ish html)
document
  .querySelectorAll('.row > span')
  .forEach((el) => el.nextSibling.remove())

tick()
setInterval(() => tick(), 1000)

// glow()
