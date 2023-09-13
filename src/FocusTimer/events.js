import {control} from "./elements.js"
import * as actions from "./actions.js"
export function registerControls() {
    control.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if (action == undefined) {
            return
        }
    })
}