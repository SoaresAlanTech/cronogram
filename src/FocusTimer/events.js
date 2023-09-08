import {control} from "./elements.js"

export function registerControls() {
    control.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if (action == undefined) {
            return
        }

        console.log(action)
    })
}