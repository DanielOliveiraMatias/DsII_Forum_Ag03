const nav = document.querySelector('.navbar')
const toggle = document.querySelectorAll('.toggle_nav')
const i_toggle = document.querySelectorAll('i .toggle_nav')

toggle.forEach(function (btn) {
    btn.addEventListener('click', function () {
        nav.classList.toggle('show_nav')
    })
})

i_toggle.forEach(function (btn) {
    btn.addEventListener('click', function () {
        nav.classList.toggle('show_nav')
    })
})