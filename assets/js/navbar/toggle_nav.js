const nav = document.querySelector('.navbar')
const toggle = document.querySelectorAll('.toggle_nav')

toggle.forEach(function(btn) {
    btn.addEventListener('click', function() {
        nav.classList.toggle('show_nav')
    })
})