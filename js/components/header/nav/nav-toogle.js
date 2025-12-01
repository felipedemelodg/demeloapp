const mobile_background = document.querySelector('.mobile-background')
const nav_menu_button = document.querySelector('.nav-menu-button')
const nav_line_2 = document.querySelector('.line-2')
const nav_line_1 = document.querySelector('.line-1')
const nav_line_3 = document.querySelector('.line-3')

export function toggle_button() {
    nav_menu_button.addEventListener('click', () => {
        if (nav_menu_button.classList.contains('normal')) {
            button_toggle_mobile_menu()
            toggle_expand_mobile_menu()

            nav_menu_button.classList.remove('normal')
        } else {
            button_toggle_mobile_menu()
            toggle_expand_mobile_menu()


            nav_menu_button.classList.add('normal')
        }
    })
}
function button_toggle_mobile_menu() {
    if (is_active()) {
        nav_line_2.classList.add('is-hidden')
        nav_line_1.classList.add('rotate-45')
        nav_line_3.classList.add('rotate--45')
        mobile_background.classList.remove('disable')
        mobile_background.classList.add('active')
    } else {
        nav_line_2.classList.remove('is-hidden')
        nav_line_1.classList.remove('rotate-45')
        nav_line_3.classList.remove('rotate--45')
        mobile_background.classList.add('disable')
        mobile_background.classList.remove('active')

    }
}

function toggle_expand_mobile_menu() {
    if (!is_active()) {
        mobile_background.classList.add('expand')
        mobile_background.classList.remove('retract')
        mobile_background.classList.add('mobile-background-padding')
    } else {
        mobile_background.classList.remove('mobile-background-padding')
        mobile_background.classList.remove('expand')
        mobile_background.classList.add('retract')
    }
}

function is_active() {
    const background = mobile_background
    if (background.classList.contains('disable')) {
        return true
    } else if (background.classList.contains('active')) {
        return false
    }

}


