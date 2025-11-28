const nav_menu_button = document.querySelector('.nav-menu-button')
const nav_line_2 = document.querySelector('.line-2')
const nav_line_1 = document.querySelector('.line-1')
const nav_line_3 = document.querySelector('.line-3')

export function toggle_button() {
  nav_menu_button.addEventListener('click',()=>{
    if(nav_menu_button.classList.contains('normal')){
        toggle_to_close_buttom()
        rotate_line()
        nav_menu_button.classList.remove('normal')
    }else{
        console.log('volta ao normal')
        nav_menu_button.classList.add('normal')
        nav_line_2.classList.remove('is-hidden')
        nav_line_1.classList.remove('rotate-45')
        nav_line_3.classList.remove('rotate--45')


    }
  })
}
function toggle_to_close_buttom() {
    const button = nav_line_2
    if (button) {
        button.classList.add('is-hidden')
    } else {
    }
}
function rotate_line() {
    nav_line_1.classList.add('rotate-45')
    nav_line_3.classList.add('rotate--45')
    console.log('teste')
}