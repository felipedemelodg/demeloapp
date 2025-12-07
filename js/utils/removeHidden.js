import { removeClass } from "./removeClass.js";
export function removeHidden(elementHTML) {
    removeClass(elementHTML, 'is-hidden')
}