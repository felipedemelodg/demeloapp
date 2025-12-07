import { addHidden } from "../../utils/addHidden.js"
import { addRotateMenos45 } from "../../utils/addRotate--45.js"
import { addRotate45 } from "../../utils/addRotate45.js"
import { removeHidden } from "../../utils/removeHidden.js"
import { removeRotate45 } from "../../utils/removeRotate45.js"
import { removeRotateMenos45 } from "../../utils/removeRotateMenos45.js"


const line1 = document.querySelector('.line-1')
const line2 = document.querySelector('.line-2')
const line3 = document.querySelector('.line-3')


export function buttonTransformX() {
    addRotate45(line1)
    addRotateMenos45(line3)
    addHidden(line2)
}
export function buttonTransformHamburger() {
    removeRotate45(line1)
    removeRotateMenos45(line3)
    removeHidden(line2)
}