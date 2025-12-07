

let state = false
export function mobileMenuState() {
    state = !state
    return state
}

export function getState() {
    return state
}

export function isClose() {
    return !state
}
export function isOpen() {
    return state
}

