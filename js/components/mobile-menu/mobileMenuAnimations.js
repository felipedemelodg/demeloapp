import { backgroundMenuExpand, backgroundMenuRetracted } from "./mobileMenuBackground.js";
import { buttonTransformHamburger, buttonTransformX } from "./mobileMenuButton.js";

export function mobileMenuAnimations(currentState) {
    if (currentState) {
        buttonTransformX()
        backgroundMenuExpand()
    } else {
        buttonTransformHamburger()
        backgroundMenuRetracted()
    }
}