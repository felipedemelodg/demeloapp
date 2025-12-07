import { addClass } from "../../utils/addClass.js"
import { removeClass } from "../../utils/removeClass.js"

const mobileBackground = document.querySelector('.mobile-background')
export function backgroundMenuExpand() {
    addClass(mobileBackground, 'expanded')
    removeClass(mobileBackground, 'retracted')
}
export function backgroundMenuRetracted() {
    addClass(mobileBackground, 'retracted')
    removeClass(mobileBackground,'expanded')
}