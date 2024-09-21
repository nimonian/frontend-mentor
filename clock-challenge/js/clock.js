export const tick = () => {
  const time = new Date()
  // console.log(time)

  const [hour, minute, second] = [
    time.getHours(),
    time.getMinutes(),
    time.getSeconds(),
  ]

  // rounded to the nearest 5m with 1s accuracy
  const roundedMinute = roundTo(300, minute * 60 + second) / 60

  // hour + 1 if 'to', else hour if 'past' (12 hour clock)
  const clockHour = (hour % 12) + (roundedMinute >= 35)

  updateDatetime(hour, minute, second)
  updateMinute(roundedMinute)
  updateHour(clockHour)
  updateAMPM(hour)
  updatePreposition(roundedMinute)
}

const updateMinute = (roundedMinute) => {
  document.querySelectorAll('[data-minute]').forEach((el) => {
    el.classList.toggle(
      'active',
      el.dataset.minute
        .split(',')
        .map((m) => Number(m))
        .includes(roundedMinute)
    )
  })
}

const updateDatetime = (hour, minute, second) => {
  document
    .querySelector('time')
    .setAttribute(
      'datetime',
      [hour, minute, second]
        .map((txt) => String(txt).padStart(2, '0'))
        .join(':')
    )
}

const updatePreposition = (roundedMinute) => {
  document
    .querySelector('.past')
    .classList.toggle('active', roundedMinute && (roundedMinute <= 30))
  document
    .querySelector('.to')
    .classList.toggle('active', roundedMinute && (roundedMinute >= 35))
  document.querySelector('.oclock').classList.toggle('active', !roundedMinute)
}

const updateHour = (clockHour) => {
  document.querySelectorAll('[data-hour]').forEach((el) => {
    el.classList.toggle('active', Number(el.dataset.hour % 12) === clockHour)
  })
}

const updateAMPM = (hour) => {
  document.querySelector('.am').classList.toggle('highlight', hour < 12)
  document.querySelector('.pm').classList.toggle('highlight', hour >= 12)
}

// rounds n to the nearest d
const roundTo = (d, n) => {
  const [q, r] = [Math.floor(n / d), n % d]
  return d * (q + (r >= d / 2))
}