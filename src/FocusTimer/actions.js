import state from "./state.js"
import * as timer from "./timer.js" 


export function toggleRunning() {
   document.documentElement.classList.toggle('running')
    timer.countDown()
}
export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
}
export function set(){
    
} 
export function toggleMusic (){
    state.isMute = document.documentElement.classList.toggle ('music-on')
}