function drawClock() {
  let time = new Date
  let template = ""
  template += time.getHours()
  if (time.getMinutes() < 10) {
    template += `:0${time.getMinutes()}`
  }
  else {
    template += `:${time.getMinutes()}`
  }


  document.getElementById('time').innerHTML = template
  setTimeout(drawClock, 1000)
}


export default class ClockController {
  constructor() {
    drawClock()
  }
}