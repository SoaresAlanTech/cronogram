import state from './state.js'
import * as el from './elements.js'

export function countDown() {
    if(!state.isRunning) {
        return
    }
    setTimeout(() => countDown(), 1000)
}
export function upDateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes;
    seconds = seconds ?? state.seconds;

    el.minutes.textContent = string(minutes).padStart(2,"0")
    el.seconds.textContent = string(seconds).padStart(2, "0")
}