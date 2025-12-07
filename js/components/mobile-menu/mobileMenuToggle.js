import { mobileMenuAnimations } from "./mobileMenuAnimations.js"
import { mobileMenuState } from "./mobileMenuState.js"

const navMenuButton = document.querySelector('.nav-menu-button')

export function mobileMenuToggle() {
    function toggleMenu() {
        const currentState = mobileMenuState()
        mobileMenuAnimations(currentState)
    }
    navMenuButton.addEventListener('click', toggleMenu)
}