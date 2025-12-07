export function checkStatus(elementHTML) {
    if (elementHTML.classList.contains('state-close')) {
        return 'state-close'
    } else if (elementHTML.classList.contains('state-open')) {
        return 'state-open'
    }
    return 'state-unknown'
}